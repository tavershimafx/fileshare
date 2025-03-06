import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  { path: '', component: DashboardLayoutComponent, children:[
    { path: 'file-manager', loadChildren: () => import("../../pages/file-manager/file-manager.module").then(k => k.FileManagerModule)}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule {
  
}
