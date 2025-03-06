import {Component} from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import { SliderCasaForteComponent } from '../common/slider-casa-forte/slider-casa-forte.component';
import { CtaVista3dComponent } from '../common/cta-vista-3d/cta-vista-3d.component';
import { SliderCasaForteGaleriaComponent } from '../common/slider-casa-forte-galeria/slider-casa-forte-galeria.component';

@Component({
    selector: 'app-descripcion-casa-forte',
    imports: [ BannerComponent, SliderCasaForteComponent, CtaVista3dComponent,SliderCasaForteGaleriaComponent],
    templateUrl: './descripcion-casa-forte.component.html',
    styleUrls: ['./descripcion-casa-forte.component.scss']
})
export class DescripcionCasaForteComponent {
}
