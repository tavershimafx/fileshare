import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/control.extensions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){
    this.loginForm.valueChanges.subscribe({
      next: (e) =>{
        this.isSubmitting = false
      }
    })
  }

  isSubmitting = false

  loginForm: CustomFormGroup = new CustomFormGroup({
    "email": new CustomFormControl("email", "", "an", Validators.compose([Validators.required])),
    "password": new CustomFormControl("password", "", "a", Validators.compose([Validators.required]))
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      
    }
  }
}
