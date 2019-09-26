import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/authentication/services/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private afAuth: AngularFireAuth) { }


  ngOnInit() {

  }

}
