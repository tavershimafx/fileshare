import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent, children:[

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule {
  
}
