import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  @ViewChild("sidebar", {static: true}) sidebar!: ElementRef

  constructor(private sidebarService: SidebarService){
    sidebarService.sidebar.subscribe({
      next: n =>{
        if(n){
          this.sidebar.nativeElement.classList.add("sidebar-in")
          this.sidebar.nativeElement.focus()
        }else{
          this.sidebar.nativeElement.classList.remove("sidebar-in")
        }
      }
    })
  }

  closeSidebar(){
    this.sidebarService.toggleSidebar()
  }
}
