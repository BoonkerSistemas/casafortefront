import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForOf, ViewportScroller} from '@angular/common';
import {HomeService} from "../../../service/home/home.service";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {environment} from "@env/environment";

@Component({
    selector: 'app-casaforteproyectos',
    imports: [
        NgForOf,
        CarouselModule
    ],
    templateUrl: './casaforteproyectos.component.html',
    styleUrls: ['./casaforteproyectos.component.scss'],
    encapsulation: ViewEncapsulation.Emulated, 
})
export class CasaforteproyectosComponent implements OnInit, AfterViewInit {
    title = 'casaforteproyectos';
    description = 'casaforteproyectos';
    lists: any;

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
    ) {}

    ngAfterViewInit() {
       
      }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    teamSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		margin: 30,
		autoplay: false,
		smartSpeed: 500,
		autoplayHoverPause: false,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 4
			},
			1200: {
				items: 4
			}
		}
    }

    ngOnInit(): void {
        this.inicio();
    }

    async inicio() {
        await this._firstComponentService.getComponentList('ComponentSecont')
            .then((element) => {

                
                let response = element.data;
                this.title = response.ComponentSecont.title;
                this.description = response.ComponentSecont.description;

                this.lists = response.ComponentSecont.listado;

                console.log(this.lists);
                

            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

   
}
