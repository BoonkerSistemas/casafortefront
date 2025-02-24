import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-banner',
    imports: [],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}