import { Component} from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import { SliderCasaForteComponent } from '../common/slider-casa-forte/slider-casa-forte.component';
import { CtaVista3dComponent } from '../common/cta-vista-3d/cta-vista-3d.component';
import { SliderCasaForteGaleriaComponent } from '../common/slider-casa-forte-galeria/slider-casa-forte-galeria.component';
import { PasosCasaForteDescripcionComponent } from './pasos-casa-Forte-descripcion/pasos-casa-Forte-descripcion.component';
import { DetallesProyectoComponent } from '../common/detalles-proyecto/detalles-proyecto.component';

@Component({
    selector: 'app-descripcion-casa-forte',
    imports: [ BannerComponent, SliderCasaForteComponent, CtaVista3dComponent,DetallesProyectoComponent, PasosCasaForteDescripcionComponent, SliderCasaForteGaleriaComponent],
    templateUrl: './descripcion-casa-forte.component.html',
    styleUrls: ['./descripcion-casa-forte.component.scss']
})
export class DescripcionCasaForteComponent  {

    
}
