import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
    selector: 'app-banner',
    imports: [TypewriterComponent],
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