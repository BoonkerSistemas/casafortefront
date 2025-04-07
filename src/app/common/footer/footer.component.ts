import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DemoSidebarComponent } from '../demo-sidebar/demo-sidebar.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { BoonkerSidebarComponent } from '../boonker-sidebar/boonker-sidebar.component';
import { PreguntasFrecuentesComponent } from './preguntas_frecuentes/preguntas_frecuentes.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { PoliticaCookiesComponent } from './politica-cookies/politica-cookies.component';

@Component({
    selector: 'app-footer',
    imports: [BoonkerSidebarComponent,PreguntasFrecuentesComponent,TerminosCondicionesComponent,PoliticaPrivacidadComponent,PoliticaCookiesComponent, BackToTopComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
