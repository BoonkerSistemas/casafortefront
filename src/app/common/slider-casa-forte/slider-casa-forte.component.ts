import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/service/home/home.service';
import { log } from 'console';

@Component({
    selector: 'app-slider-casa-forte',
    imports: [RouterLink, NgClass, NgIf, NgFor, CommonModule, CarouselModule],
    templateUrl: './slider-casa-forte.component.html',
    styleUrls: ['./slider-casa-forte.component.scss']
})
export class SliderCasaForteComponent implements OnInit, AfterViewInit  {
  sliders: any = [];
    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
        private cdr: ChangeDetectorRef
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    homeSlides: OwlOptions = {
            items: 1,
            nav: false,
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
            //let response = element.data;
            console.log('Elemento de inicio', element.data);
            
            this.sliders = element.data;
        
            // Detecta manualmente los cambios después de la actualización de los datos
            this.cdr.detectChanges();
        
  
          })
          .catch((error) => {
            console.error('Error al obtener el componente Inicio', error);
          });
      }

  ngAfterViewInit() {
       
  }



}