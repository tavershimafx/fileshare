import { NgModule } from '@angular/core';
import { FileManagerRoutingModule } from './file-manager.routing.module';
import { FileIndexComponent } from './index/index.component';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { FileManagerComponent } from './file-manager.component';

const components = [
  FileManagerComponent,
  FileIndexComponent
]

@NgModule({
  declarations: components,
  imports: [
    FileManagerRoutingModule,
    SharedComponentsModule
  ],
  exports: []
})
export class FileManagerModule {
 
}
