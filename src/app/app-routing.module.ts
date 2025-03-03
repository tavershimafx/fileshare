import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import("./layouts/none/none.module").then(k => k.NoneModule)},
  { path: 'dashboard', loadChildren: () => import("./layouts/dashboard/dashboard.module ").then(k => k.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
