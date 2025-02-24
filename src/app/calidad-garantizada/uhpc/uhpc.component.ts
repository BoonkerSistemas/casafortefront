import { Component } from '@angular/core';
import {NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {FullBoonkerService} from "../../../service/systemboonker/fullBoonker.service";
import {environment} from "@env/environment";
import {QualityService} from "../../../service/systemquality/quality.service";

@Component({
    selector: 'app-uhpc',
    imports: [
        NgIf,
        NgForOf
    ],
    templateUrl: './uhpc.component.html',
    styleUrls: ['./uhpc.component.scss']
})
export class UhpcComponent {
    title = 'Welcome';
    description = 'Welcome';
    content = 'Welcome';
    lists: any[] = [];
    materials: any;
    image: string = 'public/images/edificios/edificio1.jpg';

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: QualityService,
    ) {
    }

    public onClick(elementId: string): void {
        if (document.getElementById(elementId)) {
            this.viewportScroller.scrollToAnchor(elementId);
        } else {
            console.warn(`Elemento con ID "${elementId}" no encontrado.`);
        }
    }

    ngOnInit(): void {
        this.inicio();
    }

    async inicio() {
        try {
            const element = await this._firstComponentService.getComponentImage('UHPC');
            const element2 = await this._firstComponentService.getComponentList('UHPC');
            const response = element?.data;
            const response2 = element2?.data;

            if (!response?.UHPC) {
                throw new Error('No se encontraron datos en la respuesta');
            }

            this.title = response.UHPC.title || 'Título por defecto';
            this.description = response.UHPC.description || 'Descripción por defecto';
            this.content = response.UHPC.content || 'Contenido por defecto';
            this.lists = response2.UHPC.listado || [];
            this.image = response.UHPC.image?.[0]?.file?.url
                ? environment.api_img + response.UHPC.image[0].file.url
                : 'public/images/edificios/edificio1.jpg';

        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
            this.title = 'Error al cargar';
            this.description = 'Hubo un problema al cargar la información.';
            this.lists = [];
            this.image = 'ruta/de/imagen/error.jpg';
        }
    }

}
