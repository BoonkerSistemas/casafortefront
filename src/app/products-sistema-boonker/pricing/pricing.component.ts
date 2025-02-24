import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing',
    imports: [RouterLink,NgFor,CommonModule],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnChanges {
    @Input() listaPrecios: any; // Recibimos los detalles del producto
    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
            // Este hook se ejecuta cada vez que `productoDetalles` cambia
            if (changes['listaPrecios'] && this.listaPrecios) {
              this.inicio();
            }
          }

          async inicio() {
                  try {
                    // Asegurarnos de que productoDetalles no sea undefined o null
                    if (this.listaPrecios) {
                      console.log('DETALLES PRECIOSSSSS', this.listaPrecios);
                    } else {
                    }
                  } catch (error) {
                    console.error('Error al obtener el componente Inicio', error);
                  }
                }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}