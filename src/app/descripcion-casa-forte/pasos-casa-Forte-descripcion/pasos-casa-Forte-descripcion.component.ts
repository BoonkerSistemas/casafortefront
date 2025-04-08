import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgForOf, ViewportScroller} from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PasosCasaForteService } from 'src/service/pasoscasaforte/pasos.service';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from "@env/environment";
import { HomeService } from 'src/service/home/home.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-pasos-casa-Forte-descripcion',
    imports: [
        CarouselModule,
        CommonModule 
    ],
    templateUrl: './pasos-casa-Forte-descripcion.component.html',
    styleUrls: ['./pasos-casa-Forte-descripcion.component.scss'],
    encapsulation: ViewEncapsulation.Emulated, 
})

export class PasosCasaForteDescripcionComponent implements OnInit, AfterViewInit {
    title = 'Welcome';
    description = 'Welcome';
    protected readonly environment = environment;
    constructionLevels: any[] = []
    id: string | null = null; // Se tipa correctamente
    dtaProyecto: any = null; // Se tipa como array
    constructor(
        private viewportScroller: ViewportScroller,
        private _pasosComponentService: PasosCasaForteService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef,
        private homeService: HomeService,
                private route: ActivatedRoute
    ) {}

    ngAfterViewInit() {
       
      }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    
    ngOnInit(): void {
      // Obtener el ID de la ruta
      this.id = this.route.snapshot.paramMap.get('id') || '';

      console.log('ID de la galería:', this.id);
      this.getdataProyecto();
      this.inicio();
        this.constructionLevels = this.constructionLevels;
    }


    inicio() {
            this._pasosComponentService.getComponentPasos()
                .then((element) => {
                    let response = element.data;
                    console.log(response, "232323")
                    response.sort((a: any, b: any) => a.Nivel - b.Nivel);
                    this.constructionLevels = response;
                    this.cdr.detectChanges();
                })
                .catch((error) => {
                    console.error('Error al obtener el componente Inicio', error);
                });
        }

  async getdataProyecto(): Promise<void> {
          try {
              const element = await this.homeService.getComponentSliderProyectosById(this.id || '');
              console.log('INICIO AHORA', element.data);
              this.dtaProyecto = element.data;
  
              // Detectar cambios manualmente
              this.cdr.detectChanges();
          } catch (error) {
              console.error('Error al obtener el componente Inicio', error);
          }
      }
   
   

   
}
