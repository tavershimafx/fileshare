import { NgModule } from '@angular/core';
import { TextInputComponent } from '../components/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleBoxComponent } from '../components/example-box/example-box.component';

@NgModule({
  declarations: [
    TextInputComponent,
    ExampleBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TextInputComponent,
    ExampleBoxComponent
  ],
  providers: [],
})
export class SharedComponentsModule { }
