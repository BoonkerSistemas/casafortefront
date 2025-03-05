import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgForOf, ViewportScroller} from '@angular/common';
import {HomeService} from "../../../service/home/home.service";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {environment} from "@env/environment";

@Component({
    selector: 'app-welcome',
    imports: [
        NgForOf,
        CarouselModule,
        CommonModule 
    ],
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    encapsulation: ViewEncapsulation.Emulated, 
})
export class WelcomeComponent implements OnInit, AfterViewInit {
    title = 'Welcome';
    description = 'Welcome';
    lists: any;
    beneficios: any;
    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
    ) {}

    ngAfterViewInit() {
       
      }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    getTituloClase(index: number): string {
        const columna = index % 3; // Calculamos la posición en la fila
        if (columna === 0) return 'clip-columna-1'; // Izquierda
        if (columna === 1) return 'clip-columna-2'; // Centro
        return 'clip-columna-3'; // Derecha
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

                this.beneficios = response.ComponentSecont.listado;


            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

   
}
