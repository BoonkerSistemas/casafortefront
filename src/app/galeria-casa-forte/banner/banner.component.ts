import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import { MarkdownPipe } from '../../../pipe/markdown.pipe';
import {Component, OnInit} from "@angular/core";
import {CommonModule, ViewportScroller} from "@angular/common";
import {HomeService} from "../../../service/home/home.service";
import {DomSanitizer, Meta} from "@angular/platform-browser";
import {environment} from "@env/environment";
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-banner',
    imports: [CommonModule, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    sliders: any = [];
    currentSliders: any[] = []; // Sliders para la página actual
  currentPage: number = 0;
  itemsPerPage: number = 3;
  pages: number[] = [];

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
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        autoHeight: true,
        autoplayHoverPause: false,
        navText: [
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
        this._firstComponentService.getComponentSliderProyectos()
        .then((element) => {
          let response = element.data;
          console.log(response);
          this.sliders = response.map((slider: any) => {
              console.log(slider.imagenes.url);

            if (slider.imagenes && slider.imagenes.url) {
                
              slider.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl( environment.api_img + slider.imagenes.url );
            }
            return slider;
          });
          // Calcular el número total de páginas
       this.calculatePages();
      
       // Cargar los primeros 5 elementos
        this.loadCurrentSliders();
      
          // Detecta manualmente los cambios después de la actualización de los datos
          this.cdr.detectChanges();
      

        })
        .catch((error) => {
          console.error('Error al obtener el componente Inicio', error);
        });
    }

    calculatePages() {
      const totalPages = Math.ceil(this.sliders.length / this.itemsPerPage);
      this.pages = Array(totalPages).fill(0).map((x, i) => i);
      this.cdr.detectChanges();
    }
  
    loadCurrentSliders() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.currentSliders = this.sliders.slice(start, end);
      this.cdr.detectChanges();
    }
  
    changePage(page: number) {
      this.currentPage = page;
      this.loadCurrentSliders();
      this.cdr.detectChanges();
    }
  

    protected readonly environment = environment;

    isVideo(url: string): boolean {
        return url.endsWith('.mp4') || url.endsWith('.webm');  // Añade otros tipos de video si es necesario
    }

    
    
}
