import { NgIf } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {HomeService} from "../../../service/home/home.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

    title: any;
    description: any;
    image: any;

    constructor(private sanitizer: DomSanitizer, private _firstComponentService: HomeService) {

    }

    ngOnInit(): void {
        this.buttonsList();
    }

    async buttonsList() {
        await this._firstComponentService.getComponentOnlyButtons('Actuality')
            .then((element) => {
                let response = element.data;
                this.title = response.Actuality.title;
                this.description = response.Actuality.description;
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }
    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}
