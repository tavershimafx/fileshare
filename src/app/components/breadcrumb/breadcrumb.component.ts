import { Component, Input} from '@angular/core';

export interface IBreadcrumbItem{
  text: string
  link: string
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() title?: string
  @Input() items?: IBreadcrumbItem[]

  constructor(){
   this.items = [
    { text: "Dashboard", link: "/dashboard"},
    { text: "Product List", link: ""}
   ]
  }

}
