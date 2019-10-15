import { Component, Inject } from "@angular/core";
import { AuthService } from "../../authentication/services/auth.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

export interface DialogData {}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  constructor(public dialog: MatDialog, public authService: AuthService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: "350px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}

//Implementing the forgot pw dialog in the login component 
@Component({
  selector: "app-forgot-password",
  templateUrl:
    "../../authentication/forgot-password/forgot-password.component.html"
})
export class ForgotPasswordComponent {
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public authService: AuthService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
