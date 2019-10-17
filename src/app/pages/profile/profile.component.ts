import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  User,
  UpdateUser,
  Bookmarks
} from '../../authentication/services/user';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { NotyfService } from 'ng-notyf';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { BookmarkService } from 'src/app/shared/bookmark.service';


export interface DialogData { }
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User;
  bookmarks: Bookmarks;
  userInfo = JSON.parse(localStorage.getItem('user'))
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog,
    public bmService: BookmarkService,
    public afs: AngularFirestore
  ) {

  }

  ngOnInit() {
    this.bmService.setLocal();
  }

  deleteBm(malId) {
    this.afs.collection(`users/${this.userInfo.uid}/bookmarks`).doc(`${malId}`).delete();
  }

  //Dialog for updating name and img
  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '350px',
      hasBackdrop: true
    });
  }
}

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile/update-profile.component.html'
})
export class UpdateProfileComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public notyf: NotyfService,
    public router: Router,
    public afs: AngularFirestore
  ) { }

  user = this.afAuth.auth.currentUser;

  //checks if user is logged in and takes the values provided by the input to update the profile 
  //the values stay set by default 
  updateUser(userNameUpdate: string, profilePictureUpdate: string) {
    if (this.authService.isLoggedIn === true) {
      if (userNameUpdate !== '' && profilePictureUpdate !== '') {
        this.user
          .updateProfile({
            displayName: userNameUpdate,
            photoURL: profilePictureUpdate
          })
          .then(succ => {
            this.dialogRef.close();
            this.notyf.success('Profile has been updated');
            const userRef: AngularFirestoreDocument<any> = this.afs.doc(
              `users/${this.user.uid}`
            );
            const userData: UpdateUser = {
              displayName: this.user.displayName,
              photoURL: this.user.photoURL
            };
            return userRef.update(userData);
          })
          .catch(err => {
            this.notyf.error(err.message);
          });
      } else {
        this.notyf.error('Please fill out all the fields');
      }
    }
  }

  //will delete the user/userdata from firebase and redirect to home
  deleteUser() {
    if (this.authService.isLoggedIn === true && this.user.uid === this.afAuth.auth.currentUser.uid) {
      this.afAuth.auth.currentUser.delete();
      this.afs.doc(`users/${this.user.uid}`).delete();
      this.afs.collection(`users/${this.user.uid}/bookmarks`, ref => ref.where('email', '==', this.afAuth.auth.currentUser.email)).ref.get().then(qry => {
        const batch = this.afs.firestore.batch();
        qry.forEach(doc => batch.delete(doc.ref));
        return batch.commit();
      }).then(succ => {
        this.dialogRef.close();
        this.notyf.success('Your Profile has been deleted');
        this.router.navigate(['/']);
      }).catch(err => this.notyf.error(err.message))
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
