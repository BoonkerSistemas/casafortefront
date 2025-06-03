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

Las **cookies** son pequeños archivos de texto que se almacenan automáticamente en su dispositivo (ordenador, tableta o móvil) cuando visita nuestro sitio web. Estos archivos contienen información que nos ayuda a:

✅ **Mejorar su experiencia de navegación**  
✅ **Recordar sus preferencias y configuraciones**  
✅ **Proporcionar funcionalidades esenciales del sitio**  
✅ **Analizar cómo utiliza nuestros servicios**  
✅ **Personalizar el contenido mostrado**  

Las cookies no dañan su dispositivo ni contienen virus. Son completamente seguras y se utilizan ampliamente en internet para mejorar la experiencia del usuario.

## 2. Tipos de Cookies que Utilizamos

### 2.1 🟢 Cookies Esenciales (Siempre Activas)

<div class="cookie-box essential">

**Duración:** Sesión / 1 año  
**Finalidad:** Necesarias para el funcionamiento básico del sitio  
**¿Se puede rechazar?** ❌ No (requeridas para funcionalidad básica)  

Estas cookies son **absolutamente necesarias** para que nuestro sitio web funcione correctamente:

✓ **Gestión de sesiones**: Mantener su sesión iniciada durante su visita  
✓ **Carrito de compras**: Recordar productos añadidos a su carrito  
✓ **Procesamiento de pagos**: Facilitar transacciones seguras  
✓ **Seguridad del sitio**: Proteger contra ataques maliciosos  
✓ **Funcionalidad de formularios**: Envío correcto de consultas y presupuestos  
✓ **Equilibrio de carga**: Optimizar el rendimiento del servidor  

</div>

### 2.2 🔵 Cookies de Preferencias (Opcionales)

<div class="cookie-box preferences">

**Duración:** 1 año  
**Finalidad:** Recordar sus preferencias personales  
**¿Se puede rechazar?** ✅ Sí  

Estas cookies mejoran su experiencia recordando sus elecciones:

✓ **Idioma preferido**: Español, inglés u otros idiomas disponibles  
✓ **Configuración regional**: Moneda, zona horaria y formatos de fecha  
✓ **Preferencias de accesibilidad**: Tamaño de texto, contraste alto  
✓ **Tema visual**: Modo claro u oscuro (cuando esté disponible)  
✓ **Configuración de notificaciones**: Preferencias de alertas del sitio  

</div>

### 2.3 🟡 Cookies Analíticas (Opcionales)

<div class="cookie-box analytics">

**Duración:** 2 años  
**Finalidad:** Comprender el uso del sitio para mejorarlo  
**¿Se puede rechazar?** ✅ Sí  

Nos ayudan a entender cómo los visitantes utilizan nuestro sitio:

✓ **Estadísticas de visitantes**: Número de visitas únicas y recurrentes  
✓ **Análisis de navegación**: Páginas más visitadas y rutas de navegación  
✓ **Métricas de rendimiento**: Velocidad de carga y errores técnicos  
✓ **Análisis de comportamiento**: Interacciones con elementos del sitio  
✓ **Datos demográficos generales**: Ubicación geográfica aproximada  
✓ **Fuentes de tráfico**: Origen de las visitas (buscadores, redes sociales, etc.)  

</div>

### 2.4 🔴 Cookies de Marketing (Opcionales)

<div class="cookie-box marketing">

**Duración:** 2 años  
**Finalidad:** Personalizar publicidad y contenido promocional  
**¿Se puede rechazar?** ✅ Sí  

Utilizadas para mostrar contenido relevante y medir campañas:

✓ **Publicidad personalizada**: Anuncios basados en sus intereses  
✓ **Retargeting**: Mostrar productos vistos anteriormente  
✓ **Seguimiento entre sitios**: Análisis de comportamiento multiplataforma  
✓ **Medición de campañas**: Efectividad de publicidad y promociones  
✓ **Segmentación de audiencia**: Crear grupos para comunicaciones específicas  

</div>

## 3. Cookies de Terceros que Utilizamos

Colaboramos con proveedores de confianza que también pueden colocar cookies en su dispositivo:

| **Proveedor** | **Tipo** | **Finalidad** | **Duración** | **Más Información** |
|---------------|----------|---------------|--------------|-------------------|
| **Google Analytics** | Analítica | Análisis detallado del uso del sitio | 2 años | [Política de Google](https://policies.google.com/privacy) |
| **Google Ads** | Marketing | Publicidad en Google y sitios asociados | 2 años | [Política de Anuncios](https://policies.google.com/technologies/ads) |
| **Facebook Pixel** | Marketing | Publicidad en Facebook e Instagram | 2 años | [Política de Facebook](https://www.facebook.com/privacy/policy/) |
| **HotJar** | Analítica | Grabaciones de sesión y mapas de calor | 1 año | [Política de HotJar](https://www.hotjar.com/legal/policies/privacy/) |
| **YouTube** | Funcional | Reproducción de videos integrados | Sesión | [Política de YouTube](https://policies.google.com/privacy) |
| **Mailchimp** | Marketing | Gestión de newsletters y email marketing | 2 años | [Política de Mailchimp](https://mailchimp.com/legal/privacy/) |

## 4. Cómo Gestionar sus Preferencias de Cookies

### 4.1 🍪 Banner de Consentimiento

Cuando visite nuestro sitio por primera vez, aparecerá un banner informativo que le permitirá:

- **Aceptar todas las cookies** para una experiencia completa
- **Rechazar cookies opcionales** manteniendo solo las esenciales  
- **Personalizar su selección** eligiendo qué tipos acepta
- **Obtener más información** sobre cada tipo de cookie

### 4.2 ⚙️ Centro de Preferencias de Cookies

Puede cambiar sus preferencias en cualquier momento:

<div class="cookie-controls">
<button class="btn btn-primary">🍪 Gestionar Preferencias</button>
<button class="btn btn-secondary">ℹ️ Más Información</button>
</div>

**Para acceder:** Haga clic en el enlace "Configuración de Cookies" en el pie de página o [aquí](#configuracion-cookies).

### 4.3 🌐 Configuración del Navegador

También puede controlar las cookies directamente desde su navegador:

**Google Chrome:**
1. Menú (⋮) → Configuración → Privacidad y seguridad → Cookies
2. Seleccione "Bloquear cookies de terceros" o configuraciones personalizadas

**Mozilla Firefox:**  
1. Menú (☰) → Configuración → Privacidad y seguridad
2. Configure "Protección mejorada contra el rastreo"

**Safari:**  
1. Preferencias → Privacidad → Gestionar datos de sitios web
2. Ajuste la configuración de cookies según sus preferencias

**Microsoft Edge:**  
1. Menú (…) → Configuración → Privacidad, búsqueda y servicios
2. Configure "Prevención de seguimiento" y cookies

> **⚠️ Nota importante**: Deshabilitar cookies esenciales puede afectar la funcionalidad del sitio web, impidiendo funciones como el carrito de compras o el inicio de sesión.

## 5. Cookies y Protección de Datos

### 5.1 🔒 Seguridad de las Cookies

Implementamos medidas de seguridad para proteger la información almacenada en cookies:

- **Cifrado**: Las cookies sensibles se cifran antes del almacenamiento
- **HTTPS**: Transmisión segura de cookies a través de conexiones cifradas
- **Flags de seguridad**: Uso de atributos "Secure" y "HttpOnly" cuando es apropiado
- **Expiración controlada**: Tiempos de vida limitados para minimizar exposición

### 5.2 📋 Cumplimiento Legal

Nuestro uso de cookies cumple con:

- **RGPD (Reglamento General de Protección de Datos)**
- **Ley Orgánica de Protección de Datos de Ecuador**
- **Directiva ePrivacy de la UE**
- **Estándares internacionales de privacidad**

Para más detalles sobre el tratamiento de sus datos personales, consulte nuestra [Política de Privacidad](#politica-privacidad).

## 6. Cookies en Dispositivos Móviles

En dispositivos móviles, las cookies funcionan de manera similar:

📱 **Aplicaciones móviles**: No utilizamos cookies, sino identificadores de dispositivo y tecnologías similares  
🌐 **Navegadores móviles**: Mismo comportamiento que en desktop  
⚙️ **Configuración**: Puede gestionar cookies desde la configuración del navegador móvil  

## 7. Retención y Eliminación de Cookies

| **Tipo de Cookie** | **Duración Máxima** | **Eliminación Automática** |
|-------------------|-------------------|---------------------------|
| Cookies de sesión | Al cerrar navegador | Inmediata |
| Cookies esenciales | 1 año | Automática tras expiración |
| Cookies de preferencias | 1 año | Tras retirar consentimiento |
| Cookies analíticas | 2 años | Tras retirar consentimiento |
| Cookies de marketing | 2 años | Tras retirar consentimiento |

## 8. Actualizaciones de esta Política

### 8.1 📅 Notificación de Cambios

Le informaremos sobre cambios significativos mediante:

- **Banner de notificación** en el sitio web
- **Email informativo** si está suscrito a nuestras comunicaciones
- **Actualización de la fecha** en la parte superior de esta política

### 8.2 🔄 Historial de Cambios

**Versión actual (7 de abril de 2025):**
- Actualización completa de la política
- Nuevas categorías de cookies clarificadas
- Información ampliada sobre terceros
- Mejoras en opciones de control del usuario

**Versiones anteriores:**
- v1.2 (15 de enero de 2025): Añadida información sobre cookies de marketing
- v1.1 (10 de octubre de 2024): Actualización de proveedores terceros
- v1.0 (1 de junio de 2024): Primera versión de la política

## 9. Derechos del Usuario

Como usuario de nuestro sitio web, tiene los siguientes derechos respecto a las cookies:

### 9.1 ✅ Derechos Básicos

**Derecho a la información**: Conocer qué cookies utilizamos y para qué  
**Derecho al consentimiento**: Decidir qué cookies acepta o rechaza  
**Derecho de acceso**: Saber qué datos se han recopilado a través de cookies  
**Derecho de rectificación**: Corregir información incorrecta  
**Derecho de eliminación**: Solicitar la eliminación de datos recopilados  
**Derecho de oposición**: Oponerse al uso de cookies específicas  

### 9.2 📞 Cómo Ejercer sus Derechos

Para ejercer cualquiera de estos derechos:

1. **Envíe una solicitud** a: privacidad@boonkerconstrucciones.com
2. **Incluya su identificación** para verificar su identidad
3. **Especifique el derecho** que desea ejercer
4. **Recibirá respuesta** en un plazo máximo de 15 días hábiles

## 10. Preguntas Frecuentes sobre Cookies

### ❓ ¿Las cookies contienen información personal?

Las cookies esenciales y de preferencias generalmente no contienen información personal identificable. Las cookies analíticas y de marketing pueden asociarse con un identificador único, pero no revelan directamente su identidad.

### ❓ ¿Puedo usar el sitio sin aceptar cookies?

Sí, puede navegar por nuestro sitio rechazando las cookies opcionales. Sin embargo, algunas funcionalidades avanzadas pueden no estar disponibles.

### ❓ ¿Con qué frecuencia se actualizan las cookies?

Las cookies se actualizan automáticamente según su configuración de duración. Puede eliminarlas manualmente desde su navegador en cualquier momento.

### ❓ ¿Las cookies ralentizan mi dispositivo?

No, las cookies son archivos muy pequeños (generalmente menos de 4KB) que no afectan significativamente el rendimiento de su dispositivo.

### ❓ ¿Qué pasa si elimino todas las cookies?

Tendrá que volver a configurar sus preferencias y iniciar sesión nuevamente en sitios web que requieran autenticación.

## 11. Tecnologías Similares a las Cookies

Además de las cookies tradicionales, también utilizamos:

### 11.1 🔍 Web Beacons (Píxeles de Seguimiento)

Pequeñas imágenes transparentes que nos ayudan a:
- Confirmar la entrega de emails
- Medir la apertura de newsletters
- Analizar la efectividad de campañas

### 11.2 💾 Local Storage

Almacenamiento local del navegador para:
- Guardar preferencias de usuario temporalmente
- Mejorar la velocidad de carga del sitio
- Mantener datos de formularios no enviados

### 11.3 📊 Session Storage

Almacenamiento temporal durante la sesión para:
- Datos de navegación de la sesión actual
- Información temporal de carrito de compras
- Estados de interfaz de usuario

## 12. Cookies y Marketing Digital

### 12.1 🎯 Publicidad Personalizada

Utilizamos cookies de marketing para:

- **Mostrar anuncios relevantes** basados en páginas visitadas
- **Evitar publicidad repetitiva** limitando la frecuencia de anuncios
- **Medir conversiones** para evaluar la efectividad de campañas
- **Crear audiencias similares** para encontrar nuevos clientes potenciales

### 12.2 🚫 Opt-out de Publicidad

Puede optar por no recibir publicidad personalizada:

- **Google Ads**: [Configuración de anuncios de Google](https://adssettings.google.com/)
- **Facebook**: [Preferencias de anuncios de Facebook](https://www.facebook.com/ads/preferences/)
- **Publicidad general**: [Digital Advertising Alliance](http://optout.aboutads.info/)

## 13. Contacto y Soporte

### 13.1 📧 Información de Contacto

**Para consultas sobre cookies:**
📧 **Email**: cookies@boonkerconstrucciones.com  
📧 **Email general**: comercial@boonkerconstrucciones.com  
📱 **Teléfono**: +593 988 539 589  
📍 **Dirección**: Vía Calacalí, Quito, Ecuador  

### 13.2 🕒 Horario de Atención

**Lunes a Viernes**: 8:00 AM - 6:00 PM (GMT-5)  
**Sábados**: 9:00 AM - 1:00 PM (GMT-5)  
**Domingos**: Cerrado  

### 13.3 ⚡ Tiempo de Respuesta

- **Consultas técnicas**: 24-48 horas
- **Solicitudes de derechos**: Máximo 15 días hábiles
- **Emergencias de privacidad**: 24 horas

## 14. Recursos Adicionales

Para obtener más información sobre cookies y privacidad en línea:

- 📖 [Superintendencia de Protección de Datos del Ecuador](https://www.datospersonales.gob.ec/)
- 🌐 [All About Cookies - Información general](https://www.allaboutcookies.org/)
- 🔒 [Ministerio de Telecomunicaciones y de la Sociedad de la Información](https://www.telecomunicaciones.gob.ec/)
- ⚖️ [Ley Orgánica de Protección de Datos Personales Ecuador](https://www.telecomunicaciones.gob.ec/ley-organica-de-proteccion-de-datos-personales/)
- 📋 [Guías de privacidad digital - MINTEL Ecuador](https://www.telecomunicaciones.gob.ec/guias-digitales/)

---

**© 2025 CASAFORTE - Todos los derechos reservados.**

*Esta política de cookies está diseñada para ser transparente, comprensible y cumplir con las mejores prácticas internacionales de privacidad digital. Su privacidad es importante para nosotros.*

---

> **💡 Consejo útil**: Revise periódicamente la configuración de cookies de su navegador y nuestro centro de preferencias para mantener el control sobre su privacidad digital.`;
  
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