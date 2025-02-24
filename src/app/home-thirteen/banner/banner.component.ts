import { ViewportScroller } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import {HomeService} from "../../../service/home/home.service";
import {DomSanitizer, Meta} from "@angular/platform-browser";
import {environment} from "@env/environment";

@Component({
    selector: 'app-banner',
    imports: [TypewriterComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
    titlePage = "";
    description = "";
    contenidoPromocional = ""
    description2 = "";
    url = "";
    imagen = "";
    buttons = [{Titulo: "", Ruta: "", Icono: {data: {attributes: {url: ""}}}}]

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
        private domSanitizer: DomSanitizer,
        private _meta: Meta
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {

    }




}
