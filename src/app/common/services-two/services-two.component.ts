import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-services-two',
    imports: [],
    templateUrl: './services-two.component.html',
    styleUrls: ['./services-two.component.scss']
})
export class ServicesTwoComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
