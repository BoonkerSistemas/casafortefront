import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {HomeService} from "../../../service/home/home.service";
import {CarouselModule} from 'ngx-owl-carousel-o';
import {environment} from "@env/environment";

@Component({
    selector: 'app-cotizacion-boonker',
    imports: [
        CarouselModule,
        CommonModule,
    ],
    templateUrl: './cotizacion.component.html',
    styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit, AfterViewInit {
    isFirstImageVisible = false;
    isSecondImageVisible = false;
    title: any;
    description: any;
    buttons: any;
    image: any;
    image2: any;

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
    ) {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }


    ngOnInit(): void {
        this.inicio();
        this.buttonsList();
        this.imageComponent();
    }

    async inicio() {
        await this._firstComponentService.getComponentBotones('Simulation')
            .then((element) => {
                let response = element.data;
                this.title = response.Simulation.title;
                this.description = response.Simulation.description;

            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    async imageComponent() {
        await this._firstComponentService.getComponentImage('Simulation')
            .then((element) => {
                let response = element.data;
                this.title = response.Simulation.title;
                this.description = response.Simulation.description;
                this.image = response.Simulation.image[0].file.url;
                this.image2 = response.Simulation.image[1].file.url;

            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    async buttonsList() {
        await this._firstComponentService.getComponentOnlyButtons('Simulation')
            .then((element) => {
                let response = element.data;
                this.buttons = response.Simulation.Button;
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }
    @HostListener('mouseenter', ['$event'])
    onMouseEnter() {
        this.isFirstImageVisible = true;
    }


    @HostListener('mouseleave', ['$event'])
    onMouseLeave() {
        this.isFirstImageVisible = false;
        this.isSecondImageVisible = false;

    }

    ngAfterViewInit(): void {
    }

    protected readonly environment = environment;

}
