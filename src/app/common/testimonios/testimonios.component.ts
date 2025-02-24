import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {HomeService} from "../../../service/home/home.service";
import {environment} from "@env/environment";

@Component({
    selector: 'app-testimonios',
    imports: [NgForOf,
        NgIf,
        CommonModule, NgIf],
    templateUrl: './testimonios.component.html',
    styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {
    testimonios: any = [];

    paginaActual: number = 1;
    testimoniosPorPagina: number = 2;
    totalTestimonios: number = 20;

    selectedTestimonio: any = null;
    selectedVideoUrl: SafeResourceUrl = '';
    isOpen: boolean = false;

    title: any;
    description: any;
    buttons: any;
    image: any;
    image2: any;


    constructor(private sanitizer: DomSanitizer, private _firstComponentService: HomeService) {

    }

    ngOnInit(): void {
        this.buttonsList();
    }

    async buttonsList() {
        await this._firstComponentService.getComponentOnlyButtons('Testimonios')
            .then((element) => {
                let response = element.data;
                this.title = response.Testimonios.title;
                this.description = response.Testimonios.description;
                this.testimonios = response.Testimonios.Button;
            })
            .catch((error) => {
                console.error('Error al obtener el componente Inicio', error);
            });
    }

    openPopup(): void {
        this.isOpen = true;
    }

    closePopup(): void {
        this.isOpen = false;
        this.selectedTestimonio = null;
    }


    cargarVideo(testimonio: any) {
        // Cambiar el testimonio seleccionado
        this.selectedTestimonio = this.selectedTestimonio === testimonio ? null : testimonio;

        const url = `https://www.youtube.com/embed/${testimonio.url}`;
        this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        // this.isOpen = true; // Mostrar el popup con el video
    }


// Obtener los testimonios para la página actual
    get testimoniosPaginados() {
        const startIndex = (this.paginaActual - 1) * this.testimoniosPorPagina;

        return this.testimonios.slice(startIndex, startIndex + this.testimoniosPorPagina);
    }

    // Cambiar de página
    cambiarPagina(pagina: number) {
        if (pagina >= 1 && pagina <= this.totalPaginas) {
            this.paginaActual = pagina;
            this.selectedVideoUrl = '';
            this.selectedTestimonio = null;
        }
    }

    // Calculamos cuántas páginas necesitamos
    get totalPaginas() {
        return Math.ceil(this.testimonios.length / this.testimoniosPorPagina);
    }

    protected readonly environment = environment;
}
