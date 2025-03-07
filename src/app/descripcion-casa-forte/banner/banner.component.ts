import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {ChangeDetectorRef, Component} from "@angular/core";
import {CommonModule, ViewportScroller} from "@angular/common";
import {HomeService} from "../../../service/home/home.service";
import {DomSanitizer} from "@angular/platform-browser";
import {environment} from "@env/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-banner',
    imports: [CommonModule, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    sliders: any = [];
    id: any;

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute,
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    homeSlides: OwlOptions = {
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        autoHeight: true,
        autoplayHoverPause: false,
        navText: [
            "<i class='fa fa-angle-right'></i>",
            "<i class='fa fa-angle-left'></i>"
        ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
    }

    ngOnInit(): void {
        console.log('sliders', this.sliders);

        // Obtener el ID de la ruta
        this.id = this.route.snapshot.paramMap.get('id');
        console.log('ID de la galería:', this.id);

        // Verificar si el ID es válido antes de ejecutar `inicio()`
        if (this.id) {
            this.inicio();
        } else {
            console.warn('No se encontró un ID válido en la URL.');
        }
    }

    inicio() {
        this._firstComponentService.getComponentSliderProyectosById(this.id)
        .then((element) => {

            console.log('Elemento de inicio', element.data);
            this.sliders = element.data;
      
          // Detecta manualmente los cambios después de la actualización de los datos
          this.cdr.detectChanges();
      

        })
        .catch((error) => {
          console.error('Error al obtener el componente Inicio', error);
        });
    }

    protected readonly environment = environment;

    isVideo(url: string): boolean {
        return url.endsWith('.mp4') || url.endsWith('.webm');  // Añade otros tipos de video si es necesario
    }
    
}
