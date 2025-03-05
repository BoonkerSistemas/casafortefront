import {Component} from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import {WorkComponent} from '../common/work/work.component';
import {WelcomeComponent} from '../common/welcome/welcome.component';
import { CasaforteproyectosComponent } from '../common/casaforteproyectos/casaforteproyectos.component';
import { CtaCasaFOrteComponent } from '../common/cta-casa-forte/cta-casa-forte.component';
import { SliderCasaForteComponent } from '../common/slider-casa-forte/slider-casa-forte.component';

@Component({
    selector: 'app-galeria-casa-forte',
    imports: [CtaCasaFOrteComponent, BannerComponent, SliderCasaForteComponent],
    templateUrl: './galeria-casa-forte.component.html',
    styleUrls: ['./galeria-casa-forte.component.scss']
})
export class GaleriaCasaForteComponent {
}
