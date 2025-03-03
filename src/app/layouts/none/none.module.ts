import { NgModule } from '@angular/core';
import { NoneLayoutComponent } from './none-layout.component';
import { NoneRoutingModule } from './none-routing.module';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/pages/register/register.component';

@NgModule({
  declarations:[
    NoneLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NoneRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NoneModule {
  
}
