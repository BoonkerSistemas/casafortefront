import { Component, OnInit } from '@angular/core';
import {NgForOf, ViewportScroller} from '@angular/common';
import { FullBoonkerService } from "../../../service/systemboonker/fullBoonker.service";
import {FullCasaForteService} from "../../../service/systemcasaforte/fullCasaForte.service";
import {FullMurosContencionService} from "../../../service/systemmuroscontencion/fullMurosContencion.service";

@Component({
    selector: 'app-who-is-muros-contencion',
    templateUrl: './who-is-muros-contencion.component.html',
    imports: [
        NgForOf
    ],
    styleUrls: ['./who-is-muros-contencion.component.scss']
})
export class WhoIsMurosContencionComponent implements OnInit {

    list: any[] = [];
    title: string = '';
    description: string = '';

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullMurosContencionService
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    private inicio(): void {
        this._firstComponentService.getComponentBotones('CasaForte')
            .then((element) => {
                const response = element.data;
                this.title = response.CasaForte?.title || '';
                this.description = response.CasaForte?.description || '';

                this.list = response.CasaForte?.listado || [];
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    ngOnInit(): void {
        this.inicio();
    }
}
