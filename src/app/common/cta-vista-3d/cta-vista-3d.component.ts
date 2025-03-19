import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../../service/home/home.service";

interface Seccion {
    id: number;
    nombre: string;
    tipo: string;
    volumen: number;
    ejecucion: number;
    destacada: boolean;
}

interface Dintel {
    longitudTotal: number;
    cantidadTotal: number;
    id: number;
    nombre: string;
    dinteles: any; // Cambia el tipo si es diferente
}

@Component({
    selector: 'app-cta-vista-3d',
    imports: [NgFor, NgForOf, CommonModule, NgIf],
    templateUrl: './cta-vista-3d.component.html',
    styleUrls: ['./cta-vista-3d.component.scss']
})
export class CtaVista3dComponent implements OnInit {
    totalSecciones: number = 5;
    vistaActual: 'losas' | 'muros' = 'losas';
    seccionSeleccionada: Seccion | null = null;
    id: any;
    slider: any;

    secciones: Seccion[] = [];
    dinteles: Dintel[] = [];
    seccionesFiltradas: Seccion[] = [];


    activeSection: string | null = null;
    activeSectionPosterior: string | null = null;

   
      sections = [
        { id: '4', name: 'Muros estructurales P2', area: 87.10, time: 4, color: '#f4a000',top: '35%', left: '12%', infoTop: '25%', infoLeft: '0%' },
        { id: '2', name: 'Muros estructurales P1', area: 58.93, time: 3, color: '#f4a000',top: '70%', left: '12%', infoTop: '66%', infoLeft: '0%' },
        { id: '5', name: 'Losa de cubierta', area: 41.83, time: 3,color: '#000', top: '20%', left: '95%', infoTop: '15%', infoLeft: '72%' },
        { id: '3', name: 'Losa de entrepiso', area: 37.69, time: 4,color: '#000', top: '55%', left: '95%', infoTop: '55%', infoLeft: '72%' },
        { id: '1', name: 'Losa de cimentación', area: 37.81, time: 4,color: '#000', top: '88%', left: '95%', infoTop: '88%', infoLeft: '72%' }
      ];

      sectionsPosterior = [
        { id: '4', name: 'Muros estructurales P2', area: 87.10, time: 4, color: '#f4a000',top: '35%', left: '12%', infoTop: '25%', infoLeft: '0%' },
        { id: '2', name: 'Muros estructurales P1', area: 58.93, time: 3, color: '#f4a000',top: '70%', left: '12%', infoTop: '66%', infoLeft: '0%' },
        { id: '5', name: 'Losa de cubierta', area: 41.83, time: 3,color: '#000', top: '8%', left: '95%', infoTop: '10%', infoLeft: '72%' },
        { id: '3', name: 'Losa de entrepiso', area: 37.69, time: 4,color: '#000', top: '45%', left: '95%', infoTop: '45%', infoLeft: '72%' },
        { id: '1', name: 'Losa de cimentación', area: 37.81, time: 4,color: '#000', top: '80%', left: '95%', infoTop: '80%', infoLeft: '72%' }
      ];

    constructor(
        private viewportScroller: ViewportScroller,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
        private _firstComponentService: HomeService,
    ) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    async ngOnInit(): Promise<void> {
        this.id = this.route.snapshot.paramMap.get('id');

        if (this.id) {
            console.log('ID1:', this.id);
            await this.inicio();
        } else {
            console.warn('No se encontró un ID válido en la URL.');
        }
        this.filtrarSecciones();
    }

    async inicio(): Promise<void> {
        console.log('ID recibido:', this.id);

        try {
            // Ejecutamos ambas llamadas en paralelo para optimizar tiempos de carga
            const [element, elementDinteles] = await Promise.all([
                this._firstComponentService.getComponentSliderProyectosById(this.id),
                this._firstComponentService.getComponentSliderProyectosByDinteles(this.id)
            ]);

            // Procesamos las secciones
            this.slider = element.data;
            console.log('Datos del slider cargados:', this.slider);

            if (Array.isArray(this.slider.seccion)) {
                this.secciones = this.slider.seccion.map((seccion: any) => ({
                    id: Number(seccion.number),
                    nombre: seccion.title,
                    tipo: Number(seccion.number) % 2 !== 0 ? 'losas' : 'muros',
                    volumen: seccion.content,
                    ejecucion: 4,
                    destacada: false
                }));
            } else {
                console.warn('No hay secciones en los datos recibidos.');
            }

            console.log('Secciones procesadas:', this.secciones);

            // Procesamos los dinteles
            const dataDinteles = elementDinteles.data;
            console.log('Datos de dinteles cargados:', dataDinteles);

            if (Array.isArray(dataDinteles.dinteles)) {
                this.dinteles = dataDinteles.dinteles.map((dintel: any) => {
                    // Sumar los valores de button.title
                    const cantidadTotal = dintel.button?.reduce((sum: number, button: any) => {
                        const buttonTitle = Number(button.title) || 0;
                        return sum + buttonTitle;
                    }, 0);

                    console.log('Suma de button titles:', cantidadTotal);

                    return {
                        longitudTotal: 13.18,
                        cantidadTotal: cantidadTotal, // Sumar los valores de button.title
                        id: Number(dintel.number),
                        nombre: dintel.title,
                        dinteles: dintel.button || [] // Evita errores si "content" es null
                    };
                });
            } else {
                console.warn('No hay dinteles en los datos recibidos.');
            }

            console.log('Dinteles procesados:', this.dinteles);

            // Aplicamos filtrado y detectamos cambios
            this.filtrarSecciones();
            this.cdr.detectChanges();

        } catch (error) {
            console.error('Error al obtener datos del componente:', error);
        }
    }




    cambiarVista(vista: 'losas' | 'muros'): void {
        this.vistaActual = vista;
        this.filtrarSecciones();
    }

    filtrarSecciones(): void {
        if (!this.secciones.length) {
            console.warn('No hay secciones disponibles para filtrar.');
            return;
        }
        this.seccionesFiltradas = this.secciones.filter(seccion => seccion.tipo === this.vistaActual);
        this.cdr.detectChanges();
    }

    mostrarInfoSeccion(seccion: Seccion): void {
        this.seccionSeleccionada = seccion;
        // Solo actualizamos la sección destacada
        this.secciones.forEach((s) => s.destacada = s.id === seccion.id);
    }

    ocultarInfoSeccion(): void {
        this.seccionSeleccionada = null;
    }

    calcularTotales(seccion: any): void {
        if (!seccion.dinteles || !Array.isArray(seccion.dinteles)) return;

        seccion.cantidadTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + (dintel.cantidad || 0), 0);
        seccion.longitudTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + ((dintel.cantidad || 0) * (dintel.longitud || 0)), 0);
    }

    selectSection(sectionId: string) {
        this.activeSection = this.activeSection === sectionId ? null : sectionId;
      }

      selectSectionPosterior(sectionId: string) {
        this.activeSectionPosterior = this.activeSectionPosterior === sectionId ? null : sectionId;
      }

}
