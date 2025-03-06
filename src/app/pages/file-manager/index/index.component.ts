import { Component } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class FileIndexComponent {
  openDialog = false
  constructor(){
  
  }

  openUpload(event: any){
    this.openDialog = !this.openDialog
  }
}
