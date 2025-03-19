import {CommonModule, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {ChangeDetectorRef, Component} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {environment} from "@env/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {SystemBoonkerService} from "../../../service/systemboonker/systemBoonker.service";

@Component({
    selector: 'app-banner-galeria',
    imports: [
        CarouselModule,
        NgForOf,
        NgIf,
        CommonModule
    ],
    templateUrl: './banner-galeria.component.html',
    styleUrl: './banner-galeria.component.scss'
})
export class BannerGaleriaComponent {

    images: any[] = [
        {
          id: 1,
          url: 'images/edificios/edificio1.jpg',
          thumbnailUrl: 'images/edificios/edificio1.jpg',
          title: 'Montaña al atardecer'
        },
        {
          id: 2,
          url: 'images/edificios/edificio2.jpg',
          thumbnailUrl: 'images/edificios/edificio2.jpg',
          title: 'Montaña al atardecer 2'
        },
        {
          id: 1,
          url: 'images/edificios/edificio1.jpg',
          thumbnailUrl: 'images/edificios/edificio1.jpg',
          title: 'Montaña al atardecer'
        },
        {
          id: 2,
          url: 'images/edificios/edificio2.jpg',
          thumbnailUrl: 'images/edificios/edificio2.jpg',
          title: 'Montaña al atardecer 2'
        },
        {
          id: 1,
          url: 'images/edificios/edificio1.jpg',
          thumbnailUrl: 'images/edificios/edificio1.jpg',
          title: 'Montaña al atardecer'
        },
        {
          id: 2,
          url: 'images/edificios/edificio2.jpg',
          thumbnailUrl: 'images/edificios/edificio2.jpg',
          title: 'Montaña al atardecer 2'
        },
        {
          id: 1,
          url: 'images/edificios/edificio1.jpg',
          thumbnailUrl: 'images/edificios/edificio1.jpg',
          title: 'Montaña al atardecer'
        },
        {
          id: 2,
          url: 'images/edificios/edificio2.jpg',
          thumbnailUrl: 'images/edificios/edificio2.jpg',
          title: 'Montaña al atardecer 2'
        },
        {
          id: 1,
          url: 'images/edificios/edificio1.jpg',
          thumbnailUrl: 'images/edificios/edificio1.jpg',
          title: 'Montaña al atardecer'
        },
        {
          id: 2,
          url: 'images/edificios/edificio2.jpg',
          thumbnailUrl: 'images/edificios/edificio2.jpg',
          title: 'Montaña al atardecer 2'
        },
      ];
    protected readonly environment = environment;
    //images: any[] = [];
  
    selectedImage: any | null = null;
    showLightbox = false;

    // Paginación
  imagesPerPage = 8;
  currentPage = 1;
  totalPages = 1;
  paginatedImages: any[] = [];

    constructor(
        private viewportScroller: ViewportScroller,
        private _firstComponentService: SystemBoonkerService,
        private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef
    ) {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

   

    ngOnInit(): void {
        /*if (this.images.length > 0) {
            this.selectedImage = this.images[0];
          }*/
            this.calculateTotalPages();
            this.updatePaginatedImages();
    }

    openLightbox(image: any): void {
        this.selectedImage = image;
        this.showLightbox = true;
      }
    
      closeLightbox(): void {
        this.showLightbox = false;
      }
    
      selectImage(image: any): void {
        this.selectedImage = image;
      }
    
      nextImage(): void {
        if (!this.selectedImage) return;
        
        const currentIndex = this.images.findIndex(img => img.id === this.selectedImage?.id);
        const nextIndex = (currentIndex + 1) % this.images.length;
        this.selectedImage = this.images[nextIndex];
      }
    
      prevImage(): void {
        if (!this.selectedImage) return;
        
        const currentIndex = this.images.findIndex(img => img.id === this.selectedImage?.id);
        const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
        this.selectedImage = this.images[prevIndex];
      }
      
      // Métodos para la paginación
      calculateTotalPages(): void {
        this.totalPages = Math.ceil(this.images.length / this.imagesPerPage);
      }
      
      updatePaginatedImages(): void {
        const startIndex = (this.currentPage - 1) * this.imagesPerPage;
        const endIndex = startIndex + this.imagesPerPage;
        this.paginatedImages = this.images.slice(startIndex, endIndex);
      }
      
      goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
          this.updatePaginatedImages();
        }
      }
      
      previousPage(): void {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.updatePaginatedImages();
        }
      }
      
      nextPage(): void {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.updatePaginatedImages();
        }
      }
      
      getPageNumbers(): number[] {
        // Mostrar máximo 5 números de página en la paginación
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;
        
        if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        return Array.from({ length: (endPage - startPage + 1) }, (_, i) => startPage + i);
      }
    
}
