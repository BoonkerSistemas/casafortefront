import { Component, OnInit } from '@angular/core';
import {NgForOf, ViewportScroller} from '@angular/common';
import { FullBoonkerService } from "../../../service/systemboonker/fullBoonker.service";

@Component({
    selector: 'app-who-we-are',
    templateUrl: './who-we-are.component.html',
    imports: [
        NgForOf
    ],
    styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

    list: any[] = [];
    title: string = '';
    description: string = '';

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: FullBoonkerService
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    private inicio(): void {
        this._firstComponentService.getComponentBotones('Boonker')
            .then((element) => {
                const response = element.data;
                this.title = response.Boonker?.title || '';
                this.description = response.Boonker?.description || '';

                this.list = response.Boonker?.listado || [];
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    ngOnInit(): void {
        this.inicio();
    }
}
