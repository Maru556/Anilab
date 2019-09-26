import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../authentication/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {
    let user = afAuth.auth.currentUser;
    user.updateProfile({
      displayName:
        photoURL: afAuth.auth.currentUser.photoURL
    })
  }


  ngOnInit() {

  }
}
