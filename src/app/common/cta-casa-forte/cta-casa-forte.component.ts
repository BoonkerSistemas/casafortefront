import { Component } from '@angular/core';
import { CommonModule, NgFor, NgForOf, ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-cta-casa-forte',
    imports: [NgForOf, NgFor, CommonModule],
    templateUrl: './cta-casa-forte.component.html',
    styleUrls: ['./cta-casa-forte.component.scss']
})
export class CtaCasaFOrteComponent {
    images: any = [];
    constructor(
        private viewportScroller: ViewportScroller
    ) {
       this.images = [
            { src: 'http://54.145.52.187:1338/uploads/thumbnail_Galeria_Banner1_3339f5e927.png', alt: 'Imagen 1' },
            { src: 'http://54.145.52.187:1338/uploads/thumbnail_Galeria_Banner2_411fc68102.png?updatedAt=2025-04-04T21%3A44%3A49.353Z', alt: 'Imagen 2' },
            { src: 'http://54.145.52.187:1338/uploads/thumbnail_Galeria_Banner3_ba51e959c6.png?updatedAt=2025-04-04T21%3A44%3A48.026Z', alt: 'Imagen 3' }
          ];
          console.log(this.images);
          
    }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}