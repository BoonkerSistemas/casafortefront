import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-beneficios',
    imports: [RouterLink, NgClass, NgIf, NgFor, CommonModule],
    templateUrl: './beneficios.component.html',
    styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit, AfterViewInit  {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {
  }

  ngAfterViewInit() {
       
  }


    currentTab: string = 'tab1';
    currentTab2: string = '';
    workSelected: any = '';

    // Datos dinámicos de las pestañas y sus contenidos
    tabs = [
      { id: 'tab1', name: 'Mamposteria Estructural' },
      { id: 'tab2', name: 'Complementos Estructurales' },
      { id: 'tab3', name: 'Linea de Premezclas' },
      { id: 'tab4', name: 'Linea Hormigones Estructurales' },
      { id: 'tab5', name: 'Linea Recubrimientos' },
    ];
  
    // Datos dinámicos de los trabajos
    works = [
      { 
        img: 'images/Maestra.png', 
        title: 'Maestra',  
        descripcion: 'La mampostería estructural es un sistema constructivo que se basa en la utilización de unidades de mampostería (bloques de hormigón, ladrillos, etc.).',
        tab: 'tab1' , 
        categorias:[
            {
        titulo: 'Maestra',
        descripcion: 'Categoria 1',
        tabId: '1',
        imagen: 'images/Maestra.png'
    },
    {
        titulo: '3 Ductos',
        descripcion: 'Categoria 2 ',
        tabId: '2',
        imagen: 'images/Maestra.png'
    },
    {
      titulo: '2 Ductos',
      descripcion: 'Categoria 3 ',
      tabId: '3',
      imagen: 'images/Maestra.png'
  },
  {
    titulo: '1 Ducto',
    descripcion: 'Categoria 4 ',
    tabId: '4',
    imagen: 'images/Maestra.png'
},
    {
      titulo: 'Mixta',
      descripcion: 'Categoria 5',
      tabId: '5',
      imagen: 'images/Maestra.png'
  }
]},
      { img: 'images/work-img2.jpg', title: 'TABLA 2',  tab: 'tab2' },
      { img: 'images/work-img3.jpg', title: 'TABLA 3',  tab: 'tab3' },
      { img: 'images/work-img4.jpg', title: 'TABLA 4',  tab: 'tab4' },
      { img: 'images/work-img5.jpg', title: 'TABLA 5',  tab: 'tab5' }
    ];
  
    switchTab(event: Event, tabId: string) {
      event.preventDefault();
      this.currentTab = tabId;
    }
    switchTab2(event: Event, tab:any) {
        event.preventDefault();
        this.currentTab2 = tab.tabId;
        this.workSelected = tab;
        console.log(tab);
        
      }
}