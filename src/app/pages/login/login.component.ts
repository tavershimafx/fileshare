import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/control.extensions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shakeX } from 'ng-animate';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('shakeX', [transition('* => *', useAnimation(shakeX,
      {
        // Set the duration to 5seconds and delay to 2seconds
        params: { timing: 1, delay: 0 }}
    ))])
  ],
})
export class LoginComponent {
  isSubmitting = false
  shakeX: any = false;

  loginForm: CustomFormGroup = new CustomFormGroup({
    "email": new CustomFormControl("email", "", "an", Validators.compose([Validators.required])),
    "password": new CustomFormControl("password", "", "a", Validators.compose([Validators.required]))
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      this.shakeX = true
      console.log("Login form", this.loginForm.value)
    }
  }

  getMessage(control: string): string{
    return this.loginForm.formControl(control).getValidationMessages().join(",")
  }

  getValidationClass(control: string): string | null{
    if(this.isSubmitting){
      return this.loginForm.formControl(control).validationClass()
    }

    return null
  }
}
