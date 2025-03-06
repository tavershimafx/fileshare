import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[sidebarItem]"
})
export class SideBarItemDirective{

    constructor(private el: ElementRef){  }

    @HostListener("click") onClick(){
        let parent = this.el.nativeElement.parentElement // ul
        for(let li of parent.children){
            if (li.classList.contains("active")){
                if(li.children.length > 1){
                    // remove active from the child of any open sibling
                    for(let sub of li.children.item(1).children.item(0).children){
                        sub.classList.remove("active")   
                    }
                }
    
                li.classList.remove("active")
            }
            
            // collapse any open sibling
            //li.classList.remove("open")
        }

        setTimeout(() => {
            this.el.nativeElement.classList.add("active")
        }, 100);
    }
}