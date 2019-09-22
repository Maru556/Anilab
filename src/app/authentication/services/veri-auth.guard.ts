import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { NotyfService } from "ng-notyf";

@Injectable({
  providedIn: "root"
})
export class VeriAuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    public notyf: NotyfService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      this.notyf.error("Not cool man ☠️ Log in first");
      this.router.navigate(["/login"]);
    }
    return true;
  }
}
