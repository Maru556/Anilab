import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit() {
  }

}
