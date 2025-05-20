import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkComponent } from '../common/work/work.component';

@Component({
    selector: 'app-kit-constructivo',
    imports: [WorkComponent, RouterModule],
    templateUrl: './kit-constructivo.html',
    styleUrls: ['./kit-constructivo.scss']
})
export class KitConstructivoComponent {
}


