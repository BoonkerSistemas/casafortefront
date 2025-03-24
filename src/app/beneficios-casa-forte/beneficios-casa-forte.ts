import {Component} from '@angular/core';
import { BeneficiosComponent } from '../common/beneficios/beneficios.component';
import { RouterModule } from '@angular/router';
import { BannerGaleriaComponent } from './banner-galeria/banner-galeria.component';
import { FormularioComponent } from '../common/formulario/formulario.component';

@Component({
    selector: 'app-beneficios-casa-forte',
    imports: [BannerGaleriaComponent,BeneficiosComponent,FormularioComponent, RouterModule],
    templateUrl: './beneficios-casa-forte.html',
    styleUrls: ['./beneficios-casa-forte.scss']
})
export class BeneficiosCasaForteComponent {
}


