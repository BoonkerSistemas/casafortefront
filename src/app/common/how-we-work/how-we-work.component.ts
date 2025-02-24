import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-how-we-work',
    imports: [],
    templateUrl: './how-we-work.component.html',
    styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}