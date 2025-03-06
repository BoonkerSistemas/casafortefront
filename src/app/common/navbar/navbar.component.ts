import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NgClass, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {MenuService} from '../../../service/menu/menu.service';
import {environment} from '@env/environment';
import {NavigationEnd, Router, RouterLink, RouterModule} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {__await} from 'tslib';
import {filter} from 'rxjs';

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
    menuCliente = [{
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
    private navbarResizeObserver: ResizeObserver | null = null;


    constructor(
        private viewportScroller: ViewportScroller,
        private menuService: MenuService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    async ngOnInit(): Promise<void> {
        await this.loadMenu();
        await this.loadGeneralData();
        await this.setupResizeObserver();
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

    ngOnDestroy() {
        // Limpiar el observer al destruir el componente
        if (this.navbarResizeObserver) {
            this.navbarResizeObserver.disconnect();
        }
    }

    setupResizeObserver() {
        const navbarElement = document.querySelector('.navbar');

        if (navbarElement && 'ResizeObserver' in window) {
            this.navbarResizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    if (this.isSticky) {
                        const height = entry.contentRect.height;
                        const navbar2Elements = document.querySelectorAll('.navbar2.sticky');
                        navbar2Elements.forEach((element: any) => {
                            element.style.top = `${height}px`;
                        });
                    }
                }
            });

            this.navbarResizeObserver.observe(navbarElement);
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
            this.logos = environment.api_img + this.logoNegro; // Logo original cuando no es sticky
        }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollPosition > 100) {
            if (!this.isSticky) {
                this.isSticky = true;

                // Esperar a que se aplique la clase sticky y luego calcular la altura
                setTimeout(() => {
                    const navbarHeight = document.querySelector('.navbar.sticky')?.clientHeight || 0;
                    const navbar2Elements = document.querySelectorAll('.navbar2.sticky');
                    navbar2Elements.forEach((element: any) => {
                        element.style.top = `${navbarHeight}px`;
                    });
                }, 0);
            }
        } else {
            this.isSticky = false;
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


        this.activeItem = title;
        this.dropdownOpen[title] = false;  // Cerrar el dropdown después de seleccionar el item
    }

    checkActiveLink(url: string): boolean {
        return this.router.url.includes(url);  // Verificar si la URL contiene la ruta actual
    }

    // Método que verifica si la ruta del menú o submenú está activa
    isActive(item: any): boolean {
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

    handleNavigation(item: any) {
        if (!item.url) return; // Prevenir errores si no hay URL

        this.selectItem(item.title);
        this.navigateToLandingAndSectionSimple(item.url);
    }

    /*async navigateToLandingAndSectionSimple(landingUrl: string) {
        const [currentPath, queryString] = landingUrl.split('?'); // Extraer solo el path
        console.log('Landing Path:', currentPath); // "/sistema-casa-forte"

        const urlParams = new URLSearchParams(queryString);
        const sectionUrl = urlParams.get('section') || 'beneficios'; // Si no hay sección, usar "beneficios"
        console.log('Section:', sectionUrl);

        if (!this.isOnLanding(currentPath)) {
            // Si no estamos en la landing, navegamos primero
            await this.router.navigate([currentPath]).then(() => {
                this.changeDetectorRef.detectChanges(); // Forzar actualización de vista
                console.log('Navigated to landing, scrolling to section:', sectionUrl);
                this.viewportScroller.scrollToAnchor(sectionUrl);
            });
        } else {
            // Si ya estamos en la landing, solo hacemos scroll
            console.log('Already on landing, scrolling to section:', sectionUrl);
            this.viewportScroller.scrollToAnchor(sectionUrl);
        }
    }*/
        async navigateToLandingAndSectionSimple(landingUrl: string) {
            // Extraer solo el path base sin parámetros
            let currentPath = landingUrl;
            let sectionUrl = 'beneficios'; // Valor por defecto
            
            // Si hay un signo de interrogación, extraer query params
            if (landingUrl.includes('?')) {
                const [pathPart, queryString] = landingUrl.split('?');
                currentPath = pathPart;
                const urlParams = new URLSearchParams(queryString);
                sectionUrl = urlParams.get('section') || 'beneficios';
            }
            
            // Normalizar la ruta: eliminar barra final si existe
            currentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
            
            console.log('Normalized Landing Path:', currentPath);
            console.log('Section:', sectionUrl);
            
            // Obtener y normalizar la ruta actual
            let currentRoute = this.router.url.split('?')[0];
            currentRoute = currentRoute.endsWith('/') ? currentRoute.slice(0, -1) : currentRoute;
            console.log('Current route:', currentRoute);
            
            // Comprobar si estamos en la misma ruta base
            const isSameRoute = currentRoute === currentPath;
            console.log('Is same route:', isSameRoute);
            
            if (!isSameRoute) {
                // Navegamos a la nueva ruta
                console.log('Navigating to:', currentPath);
                try {
                    await this.router.navigateByUrl(currentPath);
                    // Pequeño retraso para asegurar que la navegación se complete
                    setTimeout(() => {
                        console.log('Scrolling to section:', sectionUrl);
                        this.viewportScroller.scrollToAnchor(sectionUrl);
                    }, 500); // Aumentado el tiempo de espera para sistemas más lentos
                } catch (error) {
                    console.error('Navigation failed:', error);
                }
            } else {
                // Ya estamos en la landing, solo hacemos scroll
                console.log('Already on landing, scrolling to section:', sectionUrl);
                this.viewportScroller.scrollToAnchor(sectionUrl);
            }
        }


    isOnLanding(url: string): boolean {
        const currentUrl = this.location.path();
        return currentUrl.includes(url);
    }
}
