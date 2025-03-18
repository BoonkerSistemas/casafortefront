import {NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {ChangeDetectorRef, Component} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {environment} from "@env/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {SystemBoonkerService} from "../../../service/systemboonker/systemBoonker.service";

@Component({
    selector: 'app-banner-sistema-boonker',
    imports: [
        CarouselModule,
        NgForOf,
        NgIf
    ],
    templateUrl: './banner-boonker.component.html',
    styleUrl: './banner-boonker.component.scss'
})
export class BannerBoonkerComponent {


    protected readonly environment = environment;

    sliders: any = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: SystemBoonkerService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef
    ) {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    homeSlides: OwlOptions = {
        items: 1,
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

                console.log('response aquiiiiiii', response);

                // Ordenar por id antes de asignar
                response.sort((a: any, b: any) => a.id - b.id);

                this.sliders = response.map((slider: any) => {
                    if (slider.image && slider.image.url) {
                        slider.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.api_img + slider.image.url);
                    }
                    return slider;
                });

                this.cdr.detectChanges();
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }



    isVideo(url: string): boolean {
        return url.endsWith('.mp4') || url.endsWith('.webm');  // Añade otros tipos de video si es necesario
    }
}
