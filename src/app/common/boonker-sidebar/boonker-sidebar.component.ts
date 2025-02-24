import {NgForOf, CommonModule, ViewportScroller, NgIf} from '@angular/common';
import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
    selector: 'app-boonker-sidebar',
    imports: [ NgForOf, CommonModule, NgIf],
    templateUrl: './boonker-sidebar.component.html',
    styleUrls: ['./boonker-sidebar.component.scss']
})
export class BoonkerSidebarComponent implements OnInit, AfterViewInit{
    menuItems = [
        {
            text: 'Cotizar',
            link: 'about',
            target: '_blank',
            icon: 'https://www.bancointernacional.com.ec/wp-content/uploads/2020/11/ico-banca-empresas.png',
            alt: 'Cotizar',
            iconWidth: 20,
            iconHeight: 20,
            class: 'menu-item'
        },
        {
            text: 'Calendario',
            link: 'https://www.bancointernacional.com.ec/actualizacion-datos/',
            target: '_blank',
            icon: 'https://www.bancointernacional.com.ec/wp-content/uploads/2020/11/ico-nuevo.png',
            alt: 'Calendario',
            iconWidth: 20,
            iconHeight: 20,
            class: 'menu-item'
        },
        {
            text: 'Hazte Cliente',
            link: 'https://www.bancointernacional.com.ec/nueva-cuenta/',
            target: '_blank',
            icon: 'https://www.bancointernacional.com.ec/wp-content/uploads/2020/11/ico-haztecliente.png',
            alt: 'Hazte Cliente',
            iconWidth: 20,
            iconHeight: 20,
            class: 'menu-item hazte-cliente-link'
        },
        {
            text: 'Buscar',
            link: 'https://www.bancointernacional.com.ec/destacados/',
            target: '_blank',
            icon: 'https://www.bancointernacional.com.ec/wp-content/uploads/2020/11/ico-destacados.png',
            alt: 'Buscar',
            iconWidth: 20,
            iconHeight: 20,
            class: 'menu-item'
        },
    ];
    currentSection = '';


    constructor(
        private viewportScroller: ViewportScroller,
        private cdr: ChangeDetectorRef,
        private renderer: Renderer2
    ) {
    }

    ngOnInit() {
        this.setCurrentSection();
    }
    ngAfterViewInit() {
        this.setCurrentSection();
      }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.setCurrentSection();
    }

    setCurrentSection() {
        if (typeof document === 'undefined') {
            return;
          }
      
        // Detecta las secciones visibles
        const sections = ['banner', 'home', 'about', 'team', 'services', 'work', 'pricing', 'blog', 'contact']; // Asegúrate de que estos sean los ids de las secciones
        let current = '';
        for (const section of sections) {
            const element = document?.getElementById(section);
            if (element && this.isElementInViewport(element)) {
                current = section;
                break;
            }
        }
        this.currentSection = current;


    }

    isElementInViewport(element: HTMLElement): boolean {
        //console.log(element);

        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
        this.currentSection = elementId; // Al hacer clic, actualizamos la sección activa
    }
}
