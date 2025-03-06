import { NgModule } from '@angular/core';
import { TextInputComponent } from '../components/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleBoxComponent } from '../components/example-box/example-box.component';
import { LeftNavComponent } from '../components/left-nav/left-nav.component';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { DropdownDirective } from '../directives/dropdown.directive';
import { SideBarItemDirective } from '../directives/sidebar-item.directive';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

const components = [
    TextInputComponent,
    ExampleBoxComponent,
    LeftNavComponent,
    TopNavComponent,
    DropdownDirective,
    SideBarItemDirective,
    BreadcrumbComponent
  ]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [CommonModule, RouterModule, ...components],
  providers: [],
})
export class SharedComponentsModule { }
