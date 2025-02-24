import { Component } from '@angular/core';
import {WhoIsMurosContencionComponent} from "./who-is-casa-forte/who-is-muros-contencion.component";
import {CotizacionComponent} from "./cotizacion/cotizacion.component";
import {ServicesMurosContencionComponent} from "./services/services-muros-contencion.component";
import {FaqMurosContencionComponent} from "./faq/faq-muros-contencion.component";
import {WhyWeDifferentComponent} from "./why-we-different/why-we-different.component";
import {BannerMurosContencionComponent} from "./banner-muros-contencion/banner-muros-contencion.component";

@Component({
    selector: 'app-home-sistema-muros-contencion',
    imports: [
        WhoIsMurosContencionComponent,
        CotizacionComponent,
        ServicesMurosContencionComponent,
        FaqMurosContencionComponent,
        BannerMurosContencionComponent,
        WhyWeDifferentComponent


    ],
    templateUrl: './home-sistema-muros-contencion.component.html',
    styleUrls: ['./home-sistema-muros-contencion.component.scss']
})
export class HomeSistemaMurosContencionComponent {}
