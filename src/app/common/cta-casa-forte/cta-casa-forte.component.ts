import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-cta-casa-forte',
    imports: [],
    templateUrl: './cta-casa-forte.component.html',
    styleUrls: ['./cta-casa-forte.component.scss']
})
export class CtaCasaFOrteComponent {
    images = [
        { src: 'assets/images/imagen1.jpg', alt: 'Imagen 1' },
        { src: 'assets/images/imagen2.jpg', alt: 'Imagen 2' },
        { src: 'assets/images/imagen3.jpg', alt: 'Imagen 3' }
      ];
    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}