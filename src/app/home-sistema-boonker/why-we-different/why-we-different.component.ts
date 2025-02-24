import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForOf, ViewportScroller } from '@angular/common';
import { environment } from '@env/environment';
import { FullBoonkerService } from '../../../service/systemboonker/fullBoonker.service';

@Component({
    selector: 'app-why-we-different',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './why-we-different.component.html',
    styleUrls: ['./why-we-different.component.scss']
})
export class WhyWeDifferentComponent implements OnInit, AfterViewInit {
    title = 'Welcome';
    description = 'Welcome';
    lists: any[] = [];
    image: string = 'ruta/de/imagen/por/defecto.jpg';
    button: any[] = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullBoonkerService,
    ) {}

    ngAfterViewInit() {}

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
            const element = await this._firstComponentService.getComponentImage('SolucionConstructivaIntegrada');
            const element2 = await this._firstComponentService.getComponentList('SolucionConstructivaIntegrada');
            const element3 = await this._firstComponentService.getComponentBotones('SolucionConstructivaIntegrada');

            const response = element?.data;
            const response2 = element2?.data;
            const response3 = element3?.data;
            if (!response?.SolucionConstructivaIntegrada) {
                throw new Error('No se encontraron datos en la respuesta');
            }

            this.title = response.SolucionConstructivaIntegrada.title || 'Título por defecto';
            this.description = response.SolucionConstructivaIntegrada.description || 'Descripción por defecto';
            this.lists = response2.SolucionConstructivaIntegrada.listado || [];
            this.button = response3.SolucionConstructivaIntegrada.botones || [];
            this.image = response.SolucionConstructivaIntegrada.image?.[0]?.file?.url
                ? environment.api_img + response.SolucionConstructivaIntegrada.image[0].file.url
                : 'ruta/de/imagen/por/defecto.jpg';

        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
            this.title = 'Error al cargar';
            this.description = 'Hubo un problema al cargar la información.';
            this.lists = [];
            this.image = 'ruta/de/imagen/error.jpg';
        }
    }
}
