import {OnInit, Component} from '@angular/core';
import {CommonModule, NgForOf, ViewportScroller} from '@angular/common';
import {HomeService} from "../../../service/home/home.service";
import {environment} from "@env/environment";

@Component({
    selector: 'app-calidad',
    imports: [CommonModule, NgForOf],
    templateUrl: './calidad.component.html',
    styleUrls: ['./calidad.component.scss']
})
export class CalidadComponent implements OnInit {
    // Información para los cuadros
    selectedInfo: string = 'Selecciona un cuadro para ver la información';
    selectedInfoTitle: string = 'Selecciona un cuadro para ver la información';

    // Datos de los 7 cuadros de imágenes
    imageBoxes: any = [];
    title: any;
    description: any;
    lists: any;
    image: any;

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: HomeService,
    ) {
    }

    ngOnInit(): void {
        
        this.quality();
        this.qualityList();
    }


    async quality() {
        await this._firstComponentService.getComponentImage('Quality')
            .then((element) => {
                let response = element.data;
                
                
                this.title = response.Quality.title;
                this.description = response.Quality.description;
                this.image = response.Quality.image[0];

            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    async qualityList() {
        await this._firstComponentService.getComponentList('Quality')
            .then((element) => {
                let response = element.data;
                this.lists = response.Quality.listado;
                this.lists.forEach((element: any) => {
                    this.imageBoxes.push({
                        img: environment.api_img + element?.icon?.url,
                        color: 'rgb(35 54 69)',
                        info: element.content,
                        title: element.title
                    }); 
                });
                this.changeColorAndInfo(0)
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

// Cambiar color y mostrar información del cuadro seleccionado
    changeColorAndInfo(selectedIndex: number) {

 
        this.imageBoxes.forEach((box: any) => {
            box.color = '#ccc';
        });

        // Cambiar el color del cuadro seleccionado a azul
        this.imageBoxes[selectedIndex].color = 'rgb(35 54 69)';

        this.selectedInfoTitle = this.imageBoxes[selectedIndex].title;
        this.selectedInfo = this.imageBoxes[selectedIndex].info;
    }

    protected readonly environment = environment;
}
