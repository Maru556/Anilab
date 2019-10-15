import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    //prevent search issues 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  value = '';

  //search in header works the same as on the homepage
  getSearchPara(value: string) {
    this.value = value;
    this.router.navigate(['/search', value]);
  }

  ngOnInit() { }
}
