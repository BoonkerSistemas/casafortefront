import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf, ViewportScroller } from '@angular/common';
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
    imports: [NgFor,NgForOf, CommonModule, NgIf],
    templateUrl: './cta-vista-3d.component.html',
    styleUrls: ['./cta-vista-3d.component.scss']
})
export class CtaVista3dComponent implements OnInit {
    totalSecciones: number = 5;
    vistaActual: 'losas' | 'muros' = 'losas';
    seccionSeleccionada: Seccion | null = null;
    
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
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit(): void {
        this.filtrarSecciones();
      }
    
      cambiarVista(vista: 'losas' | 'muros'): void {
        this.vistaActual = vista;
        this.filtrarSecciones();
      }
    
      filtrarSecciones(): void {
        if (this.vistaActual === 'losas') {
          this.seccionesFiltradas = this.secciones.filter(seccion => seccion.tipo === 'losa');
        } else {
          this.seccionesFiltradas = this.secciones.filter(seccion => seccion.tipo === 'muro');
        }
      }
    
      mostrarInfoSeccion(seccion: Seccion): void {
        this.seccionSeleccionada = seccion;
        // Reset all sections highlight
        this.secciones.forEach(s => s.destacada = false);
        // Highlight current section
        const seccionActual = this.secciones.find(s => s.id === seccion.id);
        if (seccionActual) {
          seccionActual.destacada = true;
        }
      }
    
      ocultarInfoSeccion(): void {
        this.seccionSeleccionada = null;
      }

      calcularTotales(seccion: any): void {
        seccion.cantidadTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + dintel.cantidad, 0);
        seccion.longitudTotal = seccion.dinteles.reduce((total: any, dintel: any) => total + (dintel.cantidad * dintel.longitud), 0);
      }
}