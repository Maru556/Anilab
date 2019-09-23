import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../../authentication/services/user";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}
  showEmail = false;
  showName = false;
  showImg = false;
  toggleEmail() {
    this.showEmail = !this.showEmail;
  }
  toggleName() {
    this.showName = !this.showName;
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
