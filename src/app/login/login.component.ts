import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MdSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Params_Authenticate, Proxy } from '../proxy';
import { CommonService } from '../common.service';
import { BaseComponent } from '../shared/baseComponent';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  logInForm: FormGroup;

  param: Params_Authenticate = new Params_Authenticate();

  constructor(
    private proxy: Proxy,
    private router: Router,
    common: CommonService,
    private fb: FormBuilder,
    public snackbar: MdSnackBar) {
      super(common);
      this.logInForm = this.fb.group({
        usernameTxt: ['', Validators.compose([
          Validators.required
          // Validators.minLength(4),
          // Validators.maxLength(12)
        ])],
        passwordTxt: ['', Validators.required]
      })
     }

  ngOnInit() {
  }

  Authenticate() {
    this.common.Handle_Successfull_Login('My Ticket : 123456');
    // this.proxy.Authenticate(this.param).subscribe((data) => {
    //   if (data.IsValid === true) {
    //     this.common.setTicket(data.Ticket);
    //     this.router.navigate(['/main']);
    //     this.common.IsAthenticated = true;
    //   }
    //   else {
    //     this.snackbar.open('Invalid Username Or Password', 'Close');
    //   }
    // });
  }
}