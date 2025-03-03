import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    DashboardLayoutComponent
  ],
  imports:[
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
  
}
