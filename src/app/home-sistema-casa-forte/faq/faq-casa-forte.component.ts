import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, ViewportScroller} from '@angular/common';
import {HomeService} from "../../../service/home/home.service";
import {FullBoonkerService} from "../../../service/systemboonker/fullBoonker.service";
import {MarkdownPipe} from "../../../pipe/markdown.pipe";
import {FullCasaForteService} from "../../../service/systemcasaforte/fullCasaForte.service";

@Component({
    selector: 'app-faq-casa-forte',
    imports: [NgClass, NgForOf, MarkdownPipe],
    templateUrl: './faq-casa-forte.component.html',
    styleUrls: ['./faq-casa-forte.component.scss']
})
export class FaqCasaForteComponent implements OnInit{

    title: any;
    description: any;
    faq: any;
    image: any;

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullCasaForteService,
    ) {
    }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = -1;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
            this.calculateContentHeight();
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
    calculateContentHeight(): void {
        const contentElement = document.querySelector('.accordion-content');
        if (contentElement) {
            this.contentHeight = contentElement.scrollHeight;
        }
    }

    ngOnInit(): void {
        this.inicio();
    }

    async inicio() {
        try {
            const element = await this._firstComponentService.getComponentImage('PreguntasFrecuentes');
            const element2 = await this._firstComponentService.getComponentList('PreguntasFrecuentes');
            const response = element?.data;
            const response2 = element2?.data;

            if (!response?.PreguntasFrecuentes) {
                throw new Error('No se encontraron datos en la respuesta');
            }

            this.title = response.PreguntasFrecuentes[0].title || 'Título por defecto';
            this.description = response.PreguntasFrecuentes[0].description || 'Descripción por defecto';
            this.faq = response2.PreguntasFrecuentes[0].listado || [];

        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
            this.title = 'Error al cargar';
            this.description = 'Hubo un problema al cargar la información.';
            this.image = 'ruta/de/imagen/error.jpg';
        }
    }


}
