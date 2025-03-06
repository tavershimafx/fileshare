import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager.component';
import { FileIndexComponent } from './index/index.component';

const routes: Routes = [
  { path: "", component: FileManagerComponent, children: [
    { path: "", component: FileIndexComponent },
    { path: "index", component: FileIndexComponent }
  ]}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FileManagerRoutingModule {
 
}
