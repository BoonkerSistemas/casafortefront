import {Component} from '@angular/core';
import { BeneficiosComponent } from '../common/beneficios/beneficios.component';
import { RouterModule } from '@angular/router';
import { BannerGaleriaComponent } from './banner-galeria/banner-galeria.component';

@Component({
    selector: 'app-beneficios-casa-forte',
    imports: [BannerGaleriaComponent,BeneficiosComponent, RouterModule],
    templateUrl: './beneficios-casa-forte.html',
    styleUrls: ['./beneficios-casa-forte.scss']
})
export class BeneficiosCasaForteComponent {
}


