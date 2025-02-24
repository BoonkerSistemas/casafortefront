import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule, NgForOf, NgIf, ViewportScroller } from '@angular/common';
import { environment } from '@env/environment';
import { FullBoonkerService } from '../../../service/systemboonker/fullBoonker.service';

@Component({
    selector: 'app-description-produt',
    standalone: true,
    imports: [NgForOf,CommonModule],
    templateUrl: './description-produt.component.html',
    styleUrls: ['./description-produt.component.scss']
})
export class DescriptionProdutComponent implements OnChanges , AfterViewInit {
    @Input() productoDetalles: any; // Recibimos los detalles del producto

    title = 'Welcome';
    description = 'Welcome';
    lists: any[] = [];
    image: string = 'ruta/de/imagen/por/defecto.jpg';
    button: any[] = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullBoonkerService,
    ) {}

    ngAfterViewInit() {}

    public onClick(elementId: string): void {
        if (document.getElementById(elementId)) {
            this.viewportScroller.scrollToAnchor(elementId);
        } else {
            console.warn(`Elemento con ID "${elementId}" no encontrado.`);
        }
    }

    /*ngOnInit(): void {
        this.inicio();
    }*/

    ngOnChanges(changes: SimpleChanges): void {
        // Este hook se ejecuta cada vez que `productoDetalles` cambia
        if (changes['productoDetalles'] && this.productoDetalles) {
          this.inicio();
        }
      }

    async inicio() {
        try {
          // Asegurarnos de que productoDetalles no sea undefined o null
          if (this.productoDetalles && this.productoDetalles.data) {
            console.log('DETALLES', this.productoDetalles);
            this.image = this.productoDetalles.data.image?.[0]?.url
              ? environment.api_img + this.productoDetalles.data.image?.[0]?.url
              : environment.api_img + 'ruta/por/defecto.jpg'; // Imagen por defecto si no se encuentra una imagen en los datos
              this.title = this.productoDetalles.data.title || 'Título por defecto';
            this.description = this.productoDetalles.data.description || 'Descripción por defecto';
            this.lists = this.productoDetalles.data.list || [];
          } else {
            console.error('No se encontraron detalles para este producto.');
            this.title = this.productoDetalles.data.title || 'Título por defecto';
            this.description = this.productoDetalles.data.description || 'Descripción por defecto';
            this.lists = this.productoDetalles.data.list || [];
            this.image = this.productoDetalles.data.image?.[0]?.url
                ? environment.api_img + this.productoDetalles.data.image?.[0]?.url
                : 'ruta/de/imagen/por/defecto.jpg';
          }
        } catch (error) {
          console.error('Error al obtener el componente Inicio', error);
        }
      }
}
