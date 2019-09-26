import { Component, Inject } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, UpdateUser } from '../../authentication/services/user';
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

export interface DialogData {}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User;

  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) {}
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public notyf: NotyfService,
    public router: Router,
    public afs: AngularFirestore
  ) {}

  user = this.afAuth.auth.currentUser;

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

  deleteUser() {
    this.afAuth.auth.currentUser
      .delete()
      .then(succ => {
        this.dialogRef.close();
        this.notyf.success('Your Profile has been deleted');
        this.router.navigate(['/']);
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `users/${this.user.uid}`
        );
        return userRef.delete();
      })
      .catch(err => {
        this.notyf.error(err.message);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
