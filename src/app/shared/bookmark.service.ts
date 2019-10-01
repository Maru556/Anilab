import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotyfService } from 'ng-notyf';
import { Bookmarks } from '../authentication/services/user';
import { AuthService } from '../authentication/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bmData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public notyf: NotyfService,
    public authService: AuthService
  ) {
    console.log(this.authService.isLoggedIn);
  }
  currUser; //this.afAuth.auth.currentUser.uid;

  setLocal() {
    if (this.authService.isLoggedIn === true) {
      this.afs
        .collection(`users/${this.currUser}/bookmarks`)
        .valueChanges()
        .subscribe(bookmarks => {
          this.bmData = bookmarks;
          if (bookmarks) {
            localStorage.setItem('bookmarks', JSON.stringify(this.bmData));
            JSON.parse(localStorage.getItem('bookmarks'));
          }
        });
    } else {
      console.log("nope");

    }
  }
  AddBookmarkData(bm) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${this.afAuth.auth.currentUser.uid}/bookmarks/${bm.mal_id}`
    );
    const bmData: Bookmarks = {
      mal_id: bm.mal_id,
      title: bm.title,
      image_url: bm.image_url
    };

    return userRef.set(bmData, {
      merge: true
    });
  }

  GetBookmarkData(mal_id: null, title: '', image_url: '') {
    if (this.authService.isLoggedIn === true) {
      this.AddBookmarkData({
        mal_id: mal_id,
        title: title,
        image_url: image_url
      })
        .then(succ => {
          this.notyf.success('Bookmark added');
        })
        .catch(err => {
          this.notyf.error(err.message);
        });
    }
  }
  ngOnInit() {

    this.setLocal();

  }
}
