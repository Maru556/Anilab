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
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  value = '';

  getSearchPara(value: string) {
    this.value = value;
    this.router.navigate(['/search', value]);
  }

  ngOnInit() {}
}
