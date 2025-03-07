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

    secciones: Seccion[] = [
        { id: 1, nombre: 'Losa de cimentación', tipo: 'losa', volumen: 37.81, ejecucion: 4, destacada: false },
        { id: 2, nombre: 'Muro planta baja', tipo: 'muro', volumen: 24.5, ejecucion: 7, destacada: false },
        { id: 3, nombre: 'Losa de entrepiso', tipo: 'losa', volumen: 37.69, ejecucion: 4, destacada: false },
        { id: 4, nombre: 'Muro planta alta', tipo: 'muro', volumen: 22.3, ejecucion: 6, destacada: false },
        { id: 5, nombre: 'Losa de cubierta', tipo: 'losa', volumen: 41.83, ejecucion: 3, destacada: false }
    ];

    dinteles: any = [
        {
            id: 2,
            piso: 1,
            nombre: 'Muros estructurales 1',
            dinteles: [
                { cantidad: 1, longitud: 0.63 },
                { cantidad: 1, longitud: 1.13 },
                { cantidad: 1, longitud: 1.25 },
                { cantidad: 1, longitud: 1.63 },
                { cantidad: 1, longitud: 3.13 }
            ],
            longitudTotal: 7.77,
            cantidadTotal: 5
        },
        {
            id: 4,
            piso: 2,
            nombre: 'Muros estructurales 2',
            dinteles: [
                { cantidad: 2, longitud: 0.63 },
                { cantidad: 1, longitud: 0.88 },
                { cantidad: 5, longitud: 1.13 },
                { cantidad: 2, longitud: 1.63 },
                { cantidad: 1, longitud: 2.13 }
            ],
            longitudTotal: 13.18,
            cantidadTotal: 11
        }
    ];

    seccionesFiltradas: Seccion[] = [];

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
        console.log('ID de la galería:', this.id);

        if (this.id) {
            await this.inicio();
        } else {
            console.warn('No se encontró un ID válido en la URL.');
        }
        this.filtrarSecciones();
    }

    async inicio() {
        try {
            const element = await this._firstComponentService.getComponentSliderProyectosById(this.id);
            console.log('Elemento de inicio', element.data);
            this.slider = element.data;

            this.secciones = this.slider.seccion.map((seccion: any) => ({
                id: seccion.id,
                nombre: seccion.title,
                tipo: (typeof seccion.number === 'number' && seccion.number % 2 !== 0) ? 'losa' : 'muro',
                volumen: seccion.description,
                ejecucion: 4,
                destacada: false
            }));

            console.log('Secciones', this.secciones);
            this.cdr.detectChanges();
        } catch (error) {
            console.error('Error al obtener el componente Inicio', error);
        }
    }

    cambiarVista(vista: 'losas' | 'muros'): void {
        this.vistaActual = vista;
        this.filtrarSecciones();
    }

    filtrarSecciones(): void {
        if (!this.secciones.length) return;
        this.seccionesFiltradas = this.secciones.filter(seccion => seccion.tipo === this.vistaActual);
    }

    mostrarInfoSeccion(seccion: Seccion): void {
        this.seccionSeleccionada = seccion;
        this.secciones.forEach((s) => s.destacada = false);
        const seccionActual = this.secciones.find(s => s.id === seccion.id);
        if (seccionActual) {
            seccionActual.destacada = true;
        }
    }

    ocultarInfoSeccion(): void {
        this.seccionSeleccionada = null;
    }

    calcularTotales(seccion: any): void {
        if (!seccion.dinteles || !Array.isArray(seccion.dinteles)) return;

        seccion.cantidadTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + (dintel.cantidad || 0), 0);
        seccion.longitudTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + ((dintel.cantidad || 0) * (dintel.longitud || 0)), 0);
    }
}
