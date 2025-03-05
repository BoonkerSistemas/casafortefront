import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-cta-casa-forte',
    imports: [],
    templateUrl: './cta-casa-forte.component.html',
    styleUrls: ['./cta-casa-forte.component.scss']
})
export class CtaCasaFOrteComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}