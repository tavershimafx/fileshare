import { Component} from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  constructor(private sidebarService: SidebarService){
   
  }

  toggleSidbar(){
    this.sidebarService.toggleSidebar()
  }
}
