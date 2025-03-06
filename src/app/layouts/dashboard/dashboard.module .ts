import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from "../../shared/shared.module";

@NgModule({
  declarations:[
    DashboardLayoutComponent
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    SharedComponentsModule
]
})
export class DashboardModule {
  
}
