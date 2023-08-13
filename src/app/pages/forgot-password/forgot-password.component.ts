import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private router: Router){}

  recover = {
    email: ' '
  } 

  passwordRecover(){
    
  }

  resetPassword(form: NgForm){
    return form.valid? this.router.navigate(['reset-password']): alert('Email invalid');
  }
}
