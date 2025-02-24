import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {HomeService} from 'src/service/home/home.service';
import {environment} from "@env/environment";

@Component({
    selector: 'app-proyectos',
    imports: [
        NgForOf,
        CarouselModule,
        CommonModule,
    ],
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class ProyectosComponent implements OnInit {

    title = 'Proyectos';
    description = 'Proyectos';
    //lists: any;
    lists: any = [];
    hoveredItem: any = null; // Inicializa como null

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
    ) {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    teamSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: true,
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
                items: 3
            },
            1200: {
                items: 3
            }
        }
    }

    ngOnInit(): void {
        this.inicio();
    }

    async inicio() {
        await this._firstComponentService.getComponentList('Proyectos')
            .then((element) => {
                let response = element.data;

                this.title = response.Proyectos.title;
                this.description = response.Proyectos.description;


                response.Proyectos.listado.forEach((element: any) => {


                    this.lists.push({
                        title: element.title,
                        image: environment.api_img + element?.icon?.url,
                        description: element.content
                    });
                });

            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }


    onHover(item: any) {

        this.hoveredItem = item; // Asignar el item que está siendo hover
    }

    onLeave() {
        this.hoveredItem = null // Eliminar el hover cuando se sale
    }
}
