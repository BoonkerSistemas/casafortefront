import {NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {ChangeDetectorRef, Component} from '@angular/core';
import {SystemCasaForteService} from "../../../service/systemcasaforte/systemCasaForte.service";
import {DomSanitizer} from "@angular/platform-browser";
import {OwlOptions} from "ngx-owl-carousel-o";
import {environment} from "@env/environment";
import {QualityService} from "../../../service/systemquality/quality.service";
import {SystemQualityService} from "../../../service/systemquality/systemQuality.service";

@Component({
    selector: 'app-banner',
    imports: [NgForOf],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'] // Corrección aplicada
})
export class BannerComponent {

    sliders: any = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: SystemQualityService,
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
    };

    ngOnInit(): void {
        this.inicio();
    }

    async inicio() {
        try {
            const element = await this._firstComponentService.getComponentSlider();
            const response = element.data;

            this.sliders = response.map((slider: any) => {
                if (slider.image?.url) {
                    slider.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.api_img + slider.image.url);
                }
                return slider;
            });

            this.cdr.detectChanges();
        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
        }
    }

    isVideo(url: string | null | undefined): boolean {
        return typeof url === 'string' && (url.endsWith('.mp4') || url.endsWith('.webm'));
    }
}
