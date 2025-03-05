import {Component} from '@angular/core';
import {WhoIsBoonkerComponent} from "./who-is-boonker/who-is-boonker.component";
import {CotizacionComponent} from "./cotizacion/cotizacion.component";
import {ServicesBoonkerComponent} from "./services/services-boonker.component";
import {FaqBoonkerComponent} from "./faq/faq-boonker.component";
import {WhyWeDifferentComponent} from "./why-we-different/why-we-different.component";
import {BannerBoonkerComponent} from "./banner-boonker/banner-boonker.component";
import {Router, RouterLink, RouterModule} from "@angular/router";
import { CasafortesistemaComponent } from '../common/casafortesistema/casafortesistema.component';
import { BeneficiosComponent } from '../common/beneficios/beneficios.component';

@Component({
    selector: 'app-home-sistema-boonker',
    imports: [
        CasafortesistemaComponent,
        BeneficiosComponent,
        BannerBoonkerComponent,
        RouterModule
    ],
    templateUrl: './home-sistema-boonker.component.html',
    styleUrls: ['./home-sistema-boonker.component.scss']

})
export class HomeSistemaBoonkerComponent {
}
