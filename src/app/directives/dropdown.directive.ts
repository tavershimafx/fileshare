import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[dropdown]"
})
export class DropdownDirective{

    isOpen:boolean = false

    constructor(private el: ElementRef){
      
    }

    @HostListener("click") onClick(){        
        let childDrop = this.el.nativeElement.parentElement.children.item(1)
        if(this.isOpen){
            childDrop.style.display = "none"
            // childDrop.classList.remove("open")
            // childDrop.classList.add("close")
        }else{
            childDrop.style.display = "block"
            // childDrop.classList.remove("close")
            // childDrop.classList.add("open")
        }
        this.isOpen = !this.isOpen
    }
}