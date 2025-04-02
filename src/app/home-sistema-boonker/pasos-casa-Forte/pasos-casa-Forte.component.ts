import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgForOf, ViewportScroller} from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PasosCasaForteService } from 'src/service/pasoscasaforte/pasos.service';
import { DomSanitizer } from '@angular/platform-browser';
import {environment} from "@env/environment";
@Component({
    selector: 'app-pasos-casa-Forte',
    imports: [
        CarouselModule,
        CommonModule 
    ],
    templateUrl: './pasos-casa-Forte.component.html',
    styleUrls: ['./pasos-casa-Forte.component.scss'],
    encapsulation: ViewEncapsulation.Emulated, 
})

export class PasosCasaForteComponent implements OnInit, AfterViewInit {
    title = 'Welcome';
    description = 'Welcome';
    protected readonly environment = environment;
    constructionLevels: any[] = []/*[
        {
          id: 1,
          images: [
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
          ],
          sections: [
            {
              id: 1,
              title: 'Sección 1',
              subtitle: 'Losa de Cimentación',
              active: true,
              //images: ['assets/images/seccion1.jpg']
            },
            {
              id: 2,
              title: 'Sección 2',
              subtitle: 'Muros Estructurales',
              active: false,
              //images: ['assets/images/seccion2.jpg']
            }
          ]
        },
        {
          id: 2,
          images: [
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
          ],
          sections: [
            {
              id: 3,
              title: 'Sección 3',
              subtitle: 'Losa de Entrepiso',
              active: true,
              //images: ['assets/images/seccion3.jpg']
            },
            {
              id: 4,
              title: 'Sección 4',
              subtitle: 'Muros Estructurales',
              active: false,
             // images: ['assets/images/seccion4.jpg']
            }
          ]
        },
        {
          id: 3,
          images: [
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
            'images/edificios/edificio1.jpg',
            'images/edificios/edificio2.jpg',
          ],
          sections: [
            {
              id: 5,
              title: 'Sección 5',
              subtitle: 'Losa de Cubierta',
              active: true,
              //images: ['assets/images/seccion5.jpg']
            },
            {
              id: 6,
              title: 'Obra gris',
              subtitle: 'Finalización obra gris',
              active: false,
              //images: ['assets/images/seccion6.jpg']
            }
          ]
        }
      ];*/

      //sliders: any = [];
    //slider: { banner: ImageBanner[] } = { banner: [] };

    constructor(
        private viewportScroller: ViewportScroller,
        private _pasosComponentService: PasosCasaForteService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef,
    ) {}

    ngAfterViewInit() {
       
      }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    
    ngOnInit(): void {
      this.inicio();
        this.constructionLevels = this.constructionLevels;
    }


    inicio() {
            this._pasosComponentService.getComponentPasos()
                .then((element) => {
                    let response = element.data;
    
                    console.log(response, "232323")
    
    
                    // Ordenar por id en orden ascendente
                    response.sort((a: any, b: any) => a.orden - b.orden);

                    this.constructionLevels = response;
    
    
                    /*this.sliders = response.map((slider: any) => {
                        if (slider.image && slider.image.url) {
                            slider.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.api_img + slider.image.url);
                        }
                        return slider;
                    });*/
    
                    // Detectar manualmente los cambios en la vista
                    this.cdr.detectChanges();
                })
                .catch((error) => {
                    console.error('Error al obtener el componente Inicio', error);
                });
        }
   
   

   
}
