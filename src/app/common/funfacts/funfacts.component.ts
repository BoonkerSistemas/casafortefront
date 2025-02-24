import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-funfacts',
    imports: [],
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}