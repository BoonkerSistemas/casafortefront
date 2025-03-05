import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from "../../../service/home/home.service";
import { environment } from "@env/environment";
import { SystemCasaForteService } from "../../../service/systemcasaforte/systemCasaForte.service";

@Component({
    selector: 'app-casafortesistema',
    imports: [RouterLink, NgClass, NgIf, NgFor, CommonModule],
    templateUrl: './casafortesistema.component.html',
    styleUrls: ['./casafortesistema.component.scss']
})
export class CasafortesistemaComponent implements OnInit, AfterViewInit {

    title = 'casaforteproyectos';
    description = 'casaforteproyectos';
    lists: any;
    content: any;
    currentTab: string = 'tab1';
    currentTab2: string = '';
    workSelected: any;
    clicSelect : any;
    tabs: any;
    works: Work[] = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private homeService: SystemCasaForteService,
        private home2Service: HomeService
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
            const element = await this.homeService.getComponentList('CasaForte');
            const response = element.data;

            if (response?.CasaForte) {
                this.title = response.CasaForte.title;
                this.description = response.CasaForte.description;
                this.content = response.CasaForte.content;
                this.tabs = response.CasaForte.listado;
            } else {
                console.warn('No se encontraron datos en CasaForte');
            }
        } catch (error) {
            console.error('Error al obtener el componente Inicio:', error);
        }
    }

    async product() {
        try {
            const element = await this.home2Service.getComponentProduct();
            const response = element.data;

            if (Array.isArray(response)) {
                response.forEach((work: any) => {
                    const json: Work = {
                        img: 'images/Maestra.png',
                        title: work.Titulo,
                        descripcion: work.Descripcion,
                        tab: work.numero,
                        categorias: work.variedades
                    };
                    this.works.push(json);
                });
            } else {
                console.warn('El formato de `response` no es el esperado:', response);
            }
        } catch (error) {
            console.error('Error al obtener el componente Productos:', error);
        }
    }

    switchTab(event: Event, tabId: string, title: string) {
        event.preventDefault();
        this.currentTab = tabId;
        this.clicSelect = title;
    }

    switchTab2(event: Event, categoria: any) {
        event.preventDefault();
        this.currentTab2 = categoria.id;
        console.log('Tab seleccionado:', categoria);
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
    }

    hasWorksForCurrentTab(): boolean {
        return this.works.some(work => work.tab === this.currentTab);
    }

    ngAfterViewInit(): void {}

    protected readonly environment = environment;
}

interface Work {
    img: string;
    title: string;
    descripcion: string;
    tab: string;
    categorias: any; // Using Categoria interface for better type safety
}

interface Categoria {
    id: string;
    titulo: string;
    tabId: string;
    imagen: string;
    icon?: { url: string };
    descripcion: string;
}
