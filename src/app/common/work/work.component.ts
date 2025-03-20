import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../../service/home/home.service';
import {environment} from "@env/environment";
import { log } from 'node:console';

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
    currentTab: number = 1;
    currentTab2: number | null = null;
    workSelected: any = null;
    filteredWorks: any[] = [];
    tabs: any;
    //works: Work[] = []; // 🔹 Se inicializa correctamente como un array vacío
    /*tabs = [
        { number: 1, title: 'Mampostería' },
        { number: 2, title: 'Concreto' },
        { number: 3, title: 'Acabados' }
      ];*/

   // Datos de los trabajos (imágenes)
   works = [
    {
      tab: 1,
      img: 'images/demo-img/blog-details.jpg',
      categorias: [
        { id: 11, title: 'Ladrillo Rojo', icon: { url: 'images/CasaForte/categorias/1.jpg' }, content: 'Descripción del Ladrillo Rojo.' },
        { id: 12, title: 'Bloques de Cemento', icon: { url: 'images/CasaForte/categorias/2.jpg' }, content: 'Descripción de los Bloques de Cemento.' }
      ]
    },
    {
      tab: 1,
      img: 'images/demo-img/blog-details.jpg',
      categorias: [
        { id: 13, title: 'Ladrillo Refractario', icon: { url: 'images/CasaForte/categorias/3.jpg' }, content: 'Descripción del Ladrillo Refractario.' }
      ]
    },
    {
        tab: 1,
        img: 'images/demo-img/blog-details.jpg',
        categorias: [
          { id: 14, title: 'Ladrillo Refractario', icon: { url: 'images/CasaForte/categorias/3.jpg' }, content: 'Descripción del Ladrillo Refractario.' }
        ]
      },
    {
      tab: 2,
      img: 'images/demo-img/blog-details.jpg',
      categorias: [
        { id: 21, title: 'Hormigón Armado', icon: { url: 'images/CasaForte/categorias/4.jpg' }, content: 'Descripción del Hormigón Armado.' }
      ]
    }
  ];


    constructor(
        private viewportScroller: ViewportScroller,
        private homeService: HomeService
    ) {}

    ngOnInit(): void {
        this.inicio();
        this.product();
        this.updateFilteredWorks();
    }

    
      updateFilteredWorks() {
        this.filteredWorks = this.works.filter(work => work.tab === this.currentTab);
        console.log('Filtrado:', this.filteredWorks);
        
      }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    switchTab(tabNumber: number): void {
        this.currentTab = tabNumber;
        this.updateFilteredWorks();
      }
    
      hasWorksForCurrentTab(): boolean {
        return this.works.some(work => work.tab === this.currentTab);
      }
    
      selectWork(work: any): void {
        console.log('Work selected:', work);
        
        this.workSelected = work;
        this.currentTab2 = null;
      }
    
      switchTab2(categoria: any): void {
        this.currentTab2 = categoria.id;
      }
    
      getCategoriaContent(): string {
        if (!this.workSelected || !this.currentTab2) return '';
        const categoria = this.workSelected.categorias.find((c: any) => c.id === this.currentTab2);
        return categoria ? categoria.content : '';
      }


    async inicio() {
        try {
            const element = await this.homeService.getComponentList('Proyectos');
            const response = element.data;
            console.log('Datos cargados:', response);
            

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

            console.log('Datos cargados 222:', response);

            if (Array.isArray(response)) {  // 🔹 Verifica que `response` sea un array antes de iterar
                response.forEach((work: any) => {

                    let json: Work = {
                        img: 'images/Maestra.png',
                        title: work.Titulo,
                        descripcion: work.Descripcion,
                        tab: work.numero,
                        categorias: work.variedades
                    };

                    //this.works.push(json);
                    console.log('------------------------');
                });
            } else {
                console.warn('El formato de `response` no es el esperado:', response);
            }
        } catch (error) {
            console.error('Error al obtener el componente Productos:', error);
        }
    }

  /*switchTab(event: Event, tabId: string) {
        event.preventDefault();
        this.currentTab = tabId;
    }

    switchTab2(event: Event, categoria: any) {
       // console.log('Tab seleccionado:', categoria);
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

       // console.log('Categoría seleccionada:', categoria);
    }



    hasWorksForCurrentTab(): boolean {
        return this.works.some((work) => work.tab === this.currentTab);
    }*/

    protected readonly environment = environment;
}
