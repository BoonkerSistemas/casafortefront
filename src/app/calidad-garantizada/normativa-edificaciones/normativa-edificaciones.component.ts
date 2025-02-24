import { Component, OnInit } from '@angular/core';
import {NgForOf, ViewportScroller} from '@angular/common';
import { FullBoonkerService } from "../../../service/systemboonker/fullBoonker.service";
import {QualityService} from "../../../service/systemquality/quality.service";

@Component({
    selector: 'app-normativa-edificaciones',
    templateUrl: './normativa-edificaciones.component.html',
    imports: [
        NgForOf
    ],
    styleUrls: ['./normativa-edificaciones.component.scss']
})
export class NormativaEdificacionesComponent implements OnInit {

    list: any[] = [];
    title: string = '';
    description: string = '';

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: QualityService
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    private inicio(): void {
        this._firstComponentService.getComponentList('NormativaCalidadEsencial')
            .then((element) => {
                const response = element.data;
                console.log(response);
                this.title = response.NormativaCalidadEsencial?.title || '';
                this.description = response.NormativaCalidadEsencial?.description || '';
                this.list = response.NormativaCalidadEsencial?.listado || [];
                console.log(this.list);
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    ngOnInit(): void {
        this.inicio();
    }
}
