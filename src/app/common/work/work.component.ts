import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../../service/home/home.service';
import {environment} from "@env/environment";

interface Categoria {
    titulo: string;
    descripcion: string;
    tabId: string;
    icon: any;
}

interface Work {
    img: string;
    title: string;
    descripcion?: string;
    tab: any;
    categorias?: any;
}

@Component({
    selector: 'app-work',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, NgFor, CommonModule],
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
    title = 'casaforteproyectos';
    description = 'casaforteproyectos';
    lists: any;
    content: any;
    currentTab: string = '1';
    currentTab2: string = '';
    workSelected: any;
    tabs: any;
    works: Work[] = []; // 🔹 Se inicializa correctamente como un array vacío

    constructor(
        private viewportScroller: ViewportScroller,
        private homeService: HomeService
    ) {}

    ngOnInit(): void {
        this.inicio();
        this.product();
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    async inicio() {
        try {
            const element = await this.homeService.getComponentList('Proyectos');
            const response = element.data;

            if (response?.Proyectos) {
                this.title = response.Proyectos.title;
                this.description = response.Proyectos.description;
                this.content = response.Proyectos.content;
                this.tabs = response.Proyectos.listado;
            } else {
                console.warn('No se encontraron datos en Proyectos');
            }
        } catch (error) {
            console.error('Error al obtener el componente Inicio:', error);
        }
    }

    async product() {
        try {
            const element = await this.homeService.getComponentProduct();
            const response = element.data;

            console.log('Datos cargados:', response);

            if (Array.isArray(response)) {  // 🔹 Verifica que `response` sea un array antes de iterar
                response.forEach((work: any) => {
                    console.log('------------------------', work);

                    let json: Work = {
                        img: 'images/Maestra.png',
                        title: work.Titulo,
                        descripcion: work.Descripcion,
                        tab: work.numero,
                        categorias: work.variedades
                    };

                    this.works.push(json);
                    console.log('------------------------');
                });
            } else {
                console.warn('El formato de `response` no es el esperado:', response);
            }
        } catch (error) {
            console.error('Error al obtener el componente Productos:', error);
        }
    }

    switchTab(event: Event, tabId: string) {
        event.preventDefault();
        this.currentTab = tabId;
    }

    switchTab2(event: Event, categoria: any) {
        console.log('Tab seleccionado:', categoria);
        event.preventDefault();
        this.currentTab2 = categoria.id;
        this.workSelected = categoria;

        this.works = this.works.map(work => {
            if (work.tab === this.currentTab) {
                return {
                    ...work,
                    img: environment.api_img + (categoria.icon?.url || 'images/Maestra.png')
                };
            }
            return work;
        });

        console.log('Categoría seleccionada:', categoria);
    }



    hasWorksForCurrentTab(): boolean {
        return this.works.some((work) => work.tab === this.currentTab);
    }

    protected readonly environment = environment;
}
