import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {PreguntasFrecuentesBoonkerComponent} from "./preguntas-frecuentes/preguntas-frecuentes-boonker.component";
import {DescriptionProdutComponent} from "./description-produt/description-produt.component";
import {BannerBoonkerComponent} from "./banner-boonker/banner-boonker.component";
import { PricingComponent } from './pricing/pricing.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsBoonkerService } from 'src/service/products/productsBoonker.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
@Component({
    selector: 'app-products-sistema-boonker',
    imports: [
        PreguntasFrecuentesBoonkerComponent,
        DescriptionProdutComponent,
        BannerBoonkerComponent,
        PricingComponent,
        NgxSpinnerModule,
        CommonModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    templateUrl: './products-sistema-boonker.component.html',
    styleUrls: ['./products-sistema-boonker.component.scss']
})
export class ProductsSistemaBoonkerComponent implements OnInit {
    productoId: any ;
    productoDetalles: any; // Aquí almacenas los detalles del producto que obtendrás de la API o base de datos
    listaPrecios: any[] = [];
  
    constructor(
      private route: ActivatedRoute,
      private productService: ProductsBoonkerService,
      private cdr: ChangeDetectorRef,
      private spinner: NgxSpinnerService
    ) { }

    ngOnInit(): void {
      this.spinner.show();
        // Obtener el ID del producto desde la URL
        this.route.params.subscribe(params => {
          this.productoId = params['id']; // Capturamos el id de la URL
    
          // Luego podemos usar ese ID para obtener los detalles del producto
          this.obtenerDetallesProducto(this.productoId);
        });
      }

      async obtenerDetallesProducto(id: string): Promise<void> {
        try {
          this.spinner.show();
            console.log('ID DEL PRODUCTO:', id); 
            this.productoDetalles = await this.productService.getProductoPorId(id);
            console.log('Producto Detalles:', this.productoDetalles?.data); 
            if (this.productoDetalles?.data) {
              let precios= this.productoDetalles?.data?.listadoPrecios || [];
              this.listaPrecios = this.convertirContenido(precios);
              console.log('Lista de precios:', this.listaPrecios);
              
              this.spinner.hide();
            } else {
                console.error('No se encontraron detalles para este producto');
                this.spinner.hide();
            }
        } catch (error) {
            console.error('Error al obtener detalles del producto', error);
            this.spinner.hide();
        }
    }

    convertirContenido (precios:any)  {
      return precios.map((precio: any) => {
          // Dividir el contenido por comas y eliminar espacios innecesarios
          const listaDescripcion = precio.content.split(',').map((item: any) => {
              return { "descripcion": item.trim() };
          });
          
          // Retornar un nuevo objeto con el formato deseado
          return {
              id: precio.id,
              title: precio.title,
              number: precio.number,
              descripcionLista: listaDescripcion  // Aquí agregamos la lista de descripciones
          };
      });
  };
    
}
