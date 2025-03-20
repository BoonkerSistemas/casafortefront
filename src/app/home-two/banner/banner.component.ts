import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import { MarkdownPipe } from '../../../pipe/markdown.pipe';
import {Component} from "@angular/core";
import {CommonModule, ViewportScroller} from "@angular/common";
import {HomeService} from "../../../service/home/home.service";
import {DomSanitizer, Meta} from "@angular/platform-browser";
import {environment} from "@env/environment";
import { ChangeDetectorRef } from '@angular/core';

interface ImageBanner {
    url: string;
}

@Component({
    selector: 'app-banner',
    imports: [CommonModule, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    sliders: any = [];
    slider: { banner: ImageBanner[] } = { banner: [] };

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    homeSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: false,
        smartSpeed: 500,
        autoHeight: true,
        autoplayHoverPause: false,
       /* navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],*/
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
        this.inicio();
    }

    inicio() {
        this._firstComponentService.getComponentSlider()
            .then((element) => {
                let response = element.data;

                console.log(response, "232323")


                // Ordenar por id en orden ascendente
                response.sort((a: any, b: any) => a.orden - b.orden);


                this.sliders = response.map((slider: any) => {
                    if (slider.image && slider.image.url) {
                        slider.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.api_img + slider.image.url);
                    }
                    return slider;
                });

                // Detectar manualmente los cambios en la vista
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
