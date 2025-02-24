import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgClass, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import { MenuService } from '../../../service/menu/menu.service';
import { environment } from '@env/environment';
import {NavigationEnd, Router, RouterLink, RouterModule} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { __await } from 'tslib';
import { filter } from 'rxjs';

interface MenuItem {
    title: string;
    url: string; // Asegúrate de que url esté aquí
    submenu?: { title: string; url?: string }[];
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [
        RouterLink,
        NgClass,
        NgIf,
        NgForOf,
        RouterModule
    ],
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    menus: MenuItem[] = [];
    menuCliente= [{
        "id": 320,
        "title": "Acceso Clientes",
        "url": null,
        "icon": null,
        "submenu": [
            {
                "id": 128,
                "title": "Boonker Manager",
                "url": null
            },
            {
                "id": 129,
                "title": "Boonker Cloud",
                "url": null
            },
            {
                "id": 130,
                "title": "Boonker Academy",
                "url": null
            },
            {
                "id": 131,
                "title": "Boonker Guide",
                "url": null
            },
            {
                "id": 132,
                "title": "Boonker Book",
                "url": null
            }
        ]
    }];
    logos: string = '';
    logoBlanco: string = '';
    logoNegro: string = '';
    mail: string = '';
    phone: string = '';
    whatsapp: string = '';
    isSticky: boolean = false;
    classApplied: boolean = false;
    dropdownOpen: { [key: string]: boolean } = {};
    activeItem: string | null = null;  // Estado para saber cuál item está activo

    constructor(
        private viewportScroller: ViewportScroller,
        private menuService: MenuService,
        private router: Router,
        private activatedRoute: ActivatedRoute, 
        private location: Location,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    async ngOnInit(): Promise<void> {
        await this.loadMenu();
        await this.loadGeneralData();
    }

    private async loadMenu(): Promise<void> {
        try {
            const response = await this.menuService.getComponentList('Menu');
            this.menus = response.data.Menu || [];

            
            
            this.initDropdownState();
        } catch (error) {
            console.error('Error al obtener el menú', error);
        }
    }

    private async loadGeneralData(): Promise<void> {
        try {
            const response = await this.menuService.getGeneralComponent('General');
            response.data.General.forEach((element: any) => {
                switch (element.title) {
                    case 'logo':
                        this.logoBlanco = element.icon.url;
                        break;
                    case 'email':
                        this.mail = element.description;
                        break;
                    case 'whatsapp':
                        this.whatsapp = element.description;
                        break;
                    case 'phone':
                        this.phone = element.description;
                        break;
                    case 'logoNegro':
                        this.logoNegro = element.icon.url;
                        break;
                }
            });
            this.logos = environment.api_img + this.logoBlanco;
        } catch (error) {
            console.error('Error al obtener datos generales', error);
        }
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll(): void {
        this.logos = '';
        this.isSticky = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) >= 50;
         // Cambiar el logo cuando la navbar sea sticky
    if (!this.isSticky) {
        this.logos = environment.api_img + this.logoBlanco; // Cambia el logo cuando es sticky
      } else {
        this.logos =  environment.api_img + this.logoNegro; // Logo original cuando no es sticky
      }
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    toggleClass(): void {
        this.classApplied = !this.classApplied;
    }

    private initDropdownState(): void {
        this.menus.forEach(menu => {
            this.dropdownOpen[menu.title] = false;
        });
        
    }

    toggleDropdown(menu: string): void {
        this.dropdownOpen[menu] = !this.dropdownOpen[menu];
    }

    openDropdown(menu: string): void {
        this.dropdownOpen[menu] = true;
    }

    closeDropdown(menu: string): void {
        this.dropdownOpen[menu] = false;
    }

    protected readonly environment = environment;

    isNavbarOpen = false;

    toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
    }


    sendUrl(url: any) {
        this.router.navigate([url]);
    }

    selectItem(title: string) {
        // Marcar el item como activo

        
        this.activeItem = title;
        this.dropdownOpen[title] = false;  // Cerrar el dropdown después de seleccionar el item
      }

      checkActiveLink(url: string): boolean {
        return this.router.url.includes(url);  // Verificar si la URL contiene la ruta actual
      }

     // Método que verifica si la ruta del menú o submenú está activa
    isActive(item:any): boolean {
    if (item.url && this.router.url.includes(item.url)) {
      return true;
    }

    // Verifica si alguna de las rutas de los submenús está activa
    if (item.submenu) {
      return item.submenu.some((subItem: any) => this.router.url.includes(subItem.url));
    }

    return false;
  }

   
   async navigateToLandingAndSection(landingUrl: any, sectionUrl: any) {

    
    if (!this.isOnLanding(landingUrl)) {
        // Si no estamos en la landing, navegamos a ella
        await this.router.navigate([landingUrl]).then(() => {
          // Usamos ChangeDetectorRef para asegurarnos de que Angular haya actualizado la vista
          this.changeDetectorRef.detectChanges();
    
          // Luego hacemos el scroll
          console.log('Navigated to landing, scrolling to section', sectionUrl);
          this.viewportScroller.scrollToAnchor(sectionUrl);
        });
      } else {
      this.viewportScroller.scrollToAnchor(sectionUrl);
    }
  }

 
  isOnLanding(url: string): boolean {
    const currentUrl = this.location.path(); 
    return currentUrl.includes(url); 
  }
}
