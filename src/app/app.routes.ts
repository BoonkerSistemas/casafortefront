import { Routes } from '@angular/router';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeSistemaBoonkerComponent } from './home-sistema-boonker/home-sistema-boonker.component';
import { HomeSixComponent } from './home-six/home-six.component';
import { HomeSevenComponent } from './home-seven/home-seven.component';
import { HomeEightComponent } from './home-eight/home-eight.component';
import { HomeNineComponent } from './home-nine/home-nine.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomeTwelveComponent } from './home-twelve/home-twelve.component';
import { HomeElevenComponent } from './home-eleven/home-eleven.component';
import { HomeTenComponent } from './home-ten/home-ten.component';
import { HomeThirteenComponent } from './home-thirteen/home-thirteen.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import {HomeSistemaCasaForteComponent} from "./home-sistema-casa-forte/home-sistema-casa-forte.component";
import {
    HomeSistemaMurosContencionComponent
} from "./home-sistema-muros-contencion/home-sistema-muros-contencion.component";
import { CalidadGarantizadaComponent } from './calidad-garantizada/calidad-garantizada.component';
import { ProductsSistemaBoonkerComponent } from './products-sistema-boonker/products-sistema-boonker.component';
import {MapaEcuadorComponent} from "./mapa/mapa.component";
import { GaleriaCasaForteComponent } from './galeria-casa-forte/galeria-casa-forte.component';
import { DescripcionCasaForteComponent } from './descripcion-casa-forte/descripcion-casa-forte.component';

export const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'home', component: HomeTwoComponent},
    {path: 'sistema-casa-forte', component: HomeSistemaBoonkerComponent},
    {path: 'galeria-casa-forte', component: GaleriaCasaForteComponent/*,
        children: [
            { path: ':id', component: DescripcionCasaForteComponent },
        ]*/
    },
    {path: 'galeria-casa-forte/:id', component: DescripcionCasaForteComponent},
    {path: 'sistema-muros-contencion', component: HomeSistemaMurosContencionComponent},
    {path: 'productos-complementarios', component: HomeSixComponent},
    {path: 'edificios', component: HomeSevenComponent},
    {path: 'urbanizaciones-conjuntos', component: HomeEightComponent},
    {path: 'proyectos-alta-seguridad', component: HomeNineComponent},
    {path: 'proyectos-especiales', component: HomeTenComponent},
    {path: 'residencias-particulares', component: HomeElevenComponent},
    {path: 'constructora', component: HomeTwelveComponent},
    {path: 'clientes-finales', component: HomeThirteenComponent},
    {path: 'uhpc', component: CalidadGarantizadaComponent},
    {path: 'normativas-edificaciones-esenciales', component: BlogDetailsComponent},
    {path: 'garantia-boonker', component: BlogDetailsComponent},
    {path: 'sello-calidad-constructiva', component: BlogDetailsComponent},
    {path: 'preguntas-inquietudes', component: BlogDetailsComponent},
    {path: 'certificaciones', component: BlogDetailsComponent},
    {path: 'mapa', component: MapaEcuadorComponent},
    // Here add new pages component
    {path: 'sistema-boonker-products/:id', component: ProductsSistemaBoonkerComponent},
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

