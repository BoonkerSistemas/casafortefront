import { Component } from '@angular/core';
import {WhoIsCasaForteComponent} from "./who-is-casa-forte/who-is-casa-forte.component";
import {CotizacionComponent} from "./cotizacion/cotizacion.component";
import {ServicesCasaForteComponent} from "./services/services-casa-forte.component";
import {FaqCasaForteComponent} from "./faq/faq-casa-forte.component";
import {WhyWeDifferentComponent} from "./why-we-different/why-we-different.component";
import {BannerCasaForteComponent} from "./banner-casa-forte/banner-casa-forte.component";

@Component({
    selector: 'app-home-sistema-casa-forte',
    imports: [
        WhoIsCasaForteComponent,
        CotizacionComponent,
        ServicesCasaForteComponent,
        FaqCasaForteComponent,
        BannerCasaForteComponent,
        WhyWeDifferentComponent


    ],
    templateUrl: './home-sistema-casa-forte.component.html',
    styleUrls: ['./home-sistema-casa-forte.component.scss']
})
export class HomeSistemaCasaForteComponent {}
