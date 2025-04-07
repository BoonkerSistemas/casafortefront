// preguntas-frecuentes.component.ts
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-politica-cookies',
  imports: [NgFor,CommonModule,NgIf,NgForOf,MarkdownModule],
  templateUrl: './politica-cookies.component.html',
  styleUrls: ['./politica-cookies.component.scss'],
  encapsulation: ViewEncapsulation.None // Esto es importante para que los estilos se apliquen al contenido Markdown

})
export class PoliticaCookiesComponent implements OnInit {
  markdownContent: string = `

*Última actualización: 7 de abril de 2025*

---

## 1. ¿Qué son las Cookies?

Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o móvil) cuando visita nuestra página web. Las cookies nos ayudan a proporcionar funcionalidades esenciales como el carrito de compras, recordar sus preferencias, y entender cómo interactúa con nuestro sitio.

## 2. Tipos de Cookies que Utilizamos

### 2.1 Cookies Esenciales
**Duración:** Sesión / 1 año  
**Finalidad:** Necesarias para el funcionamiento básico del sitio  
**¿Se puede rechazar?** No


✓ Mantener su sesión iniciada
✓ Recordar artículos en su carrito
✓ Procesar pagos
✓ Gestionar la seguridad del sitio


### 2.2 Cookies de Preferencias
**Duración:** 1 año  
**Finalidad:** Recordar sus preferencias y configuraciones  
**¿Se puede rechazar?** Sí


✓ Idioma preferido
✓ Región o ubicación
✓ Configuración del tamaño de texto
✓ Configuración de accesibilidad


### 2.3 Cookies Analíticas
**Duración:** 2 años  
**Finalidad:** Comprender cómo utilizan los visitantes nuestro sitio  
**¿Se puede rechazar?** Sí


✓ Número de visitantes
✓ Páginas visitadas
✓ Tiempo de permanencia
✓ Fuentes de tráfico


### 2.4 Cookies de Marketing
**Duración:** 2 años  
**Finalidad:** Mostrar anuncios relevantes  
**¿Se puede rechazar?** Sí


✓ Seguimiento entre sitios
✓ Publicidad personalizada
✓ Medir la eficacia de campañas


## 3. Cookies de Terceros

Permitimos que terceros coloquen cookies en su dispositivo cuando visita nuestro sitio. Estas cookies se utilizan principalmente para fines analíticos y de marketing.

| Proveedor | Tipo | Finalidad | Más información |
|-----------|------|-----------|-----------------|
| Google Analytics | Analítica | Análisis de uso del sitio | [Política de Google](https://policies.google.com/) |
| Facebook | Marketing | Publicidad en redes sociales | [Política de Facebook](https://www.facebook.com/policy.php) |
| HotJar | Analítica | Análisis de comportamiento | [Política de HotJar](https://www.hotjar.com/legal/policies/privacy/) |

## 4. Control de Cookies

### 4.1 Banner de Cookies
Cuando visite nuestro sitio por primera vez, verá un banner de cookies que le permitirá aceptar o rechazar las cookies no esenciales.

![Banner de cookies](https://via.placeholder.com/800x150)

### 4.2 Ajustes del Navegador
También puede controlar las cookies a través de la configuración de su navegador:

- [Chrome](https://support.google.com/chrome/answer/95647)
- [Firefox](https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias)
- [Safari](https://support.apple.com/es-es/guide/safari/sfri11471/mac)
- [Edge](https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy)

### 4.3 Centro de Preferencias
Puede cambiar sus preferencias de cookies en cualquier momento visitando nuestro [Centro de Preferencias de Cookies](#).

## 5. Cookies y su Privacidad

Para obtener más información sobre cómo protegemos sus datos personales, consulte nuestra [Política de Privacidad](#).

## 6. Cambios en nuestra Política de Cookies

Cualquier cambio que realicemos en nuestra Política de Cookies en el futuro se publicará en esta página. Por favor, revise regularmente esta política para estar informado de actualizaciones o cambios.

## 7. Contacto

Si tiene preguntas sobre nuestra Política de Cookies, contáctenos:

**CASAFORTE**  
Departamento de Privacidad  
Vía Calacalí, Quito, Ecuador  
Email: comercial@boonkerconstrucciones.com  
Teléfono: +593 988 539 589

---

© 2025 CASAFORTE. Todos los derechos reservados.
  `;
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    // Configuración SEO
    this.titleService.setTitle('Términos y Condiciones - CASAFORTE');
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Términos y condiciones legales para el uso de los servicios de CASAFORTE, soluciones estructurales para viviendas.' 
    });
  }

  
}