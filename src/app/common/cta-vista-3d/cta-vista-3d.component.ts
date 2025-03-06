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
}