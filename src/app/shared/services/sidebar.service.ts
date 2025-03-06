import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SidebarService{

    sidebar: Observable<boolean> = new Observable()
    private sidebarOpen: boolean = false
    private sidebarSubscriber!: Subscriber<boolean>

    constructor(){
        this.sidebar = new Observable(x =>{
            this.sidebarSubscriber = x
        })
    }

    /**
     * Toggles the sidebar to either open or closed
     */
    toggleSidebar(){
        this.sidebarOpen = !this.sidebarOpen
        this.sidebarSubscriber.next(this.sidebarOpen)
    }
}