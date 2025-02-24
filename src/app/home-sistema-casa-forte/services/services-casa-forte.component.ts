import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgForOf, ViewportScroller} from '@angular/common';
import {FullBoonkerService} from "../../../service/systemboonker/fullBoonker.service";
import {environment} from "@env/environment";
import {FullCasaForteService} from "../../../service/systemcasaforte/fullCasaForte.service";

@Component({
    selector: 'app-services-casa-forte',
    imports: [
        NgForOf
    ],
    templateUrl: './services-casa-forte.component.html',
    styleUrls: ['./services-casa-forte.component.scss']
})
export class ServicesCasaForteComponent implements OnInit, AfterViewInit {
    title = 'Welcome';
    description = 'Welcome';
    content = 'Welcome';
    lists: any[] = [];
    materials: any;
    image: string = 'ruta/de/imagen/por/defecto.jpg';

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullCasaForteService,
    ) {
    }

    ngAfterViewInit() {
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
            const element = await this._firstComponentService.getComponentImage('KitMateriales');
            const element2 = await this._firstComponentService.getComponentList('KitMateriales');
            this.materials = await this._firstComponentService.getComponentMaterials();
            const response = element?.data;
            const response2 = element2?.data;

            if (!response?.KitMateriales) {
                throw new Error('No se encontraron datos en la respuesta');
            }

            this.title = response.KitMateriales.title || 'Título por defecto';
            this.description = response.KitMateriales.description || 'Descripción por defecto';
            this.content = response.KitMateriales.content || 'Contenido por defecto';
            this.image = response.KitMateriales.image?.[0]?.file?.url
                ? environment.api_img + response.KitMateriales.image[0].file.url
                : 'ruta/de/imagen/por/defecto.jpg';

        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
            this.title = 'Error al cargar';
            this.description = 'Hubo un problema al cargar la información.';
            this.lists = [];
            this.image = 'ruta/de/imagen/error.jpg';
        }
    }

    protected readonly environment = environment;
}
