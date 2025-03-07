import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule, ViewportScroller } from "@angular/common";
import { HomeService } from "../../../service/home/home.service";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "@env/environment";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    sliders: any  // Se tipa como array
    id: string | null = null; // Se tipa correctamente

    constructor(
        private viewportScroller: ViewportScroller,
        private homeService: HomeService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log('sliders', this.sliders);

        // Obtener el ID de la ruta
        this.id = this.route.snapshot.paramMap.get('id') || '';

        console.log('ID de la galería:', this.id);

        if (this.id) {
            this.inicio();
        } else {
            console.warn('No se encontró un ID válido en la URL.');
        }
    }

    async inicio(): Promise<void> {
        try {
            const element = await this.homeService.getComponentSliderProyectosById(this.id || '');
            console.log('Elemento de inicio', element.data);
            this.sliders = element.data;

            // Detectar cambios manualmente
            this.cdr.detectChanges();
        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
        }
    }

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
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    };

    protected readonly environment = environment;

    isVideo(url: string): boolean {
        return /\.(mp4|webm)$/i.test(url);  // Expresión regular más eficiente
    }
}
