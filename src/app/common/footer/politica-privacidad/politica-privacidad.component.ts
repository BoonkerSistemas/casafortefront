// preguntas-frecuentes.component.ts
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-politica-privacidad',
  imports: [NgFor,CommonModule,NgIf,NgForOf,MarkdownModule],
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.scss'],
  encapsulation: ViewEncapsulation.None // Esto es importante para que los estilos se apliquen al contenido Markdown

})
export class PoliticaPrivacidadComponent implements OnInit {
  markdownContent: string = `

*Última actualización: 7 de abril de 2025*

---

## 1. Introducción

En CASAFORTE, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.

## 2. Información que Recopilamos

### 2.1 Información Personal

Podemos recopilar la siguiente información personal:

| Tipo de datos | Finalidad | Base legal |
|---------------|-----------|------------|
| Nombre y apellidos | Identificación y comunicación | Consentimiento |
| Dirección de correo electrónico | Comunicación y marketing | Consentimiento |
| Número de teléfono | Asistencia al cliente | Consentimiento |
| Dirección postal | Entrega de productos | Ejecución contractual |
| Datos de pago | Procesamiento de transacciones | Ejecución contractual |

### 2.2 Información Automática

También recopilamos automáticamente:
- Dirección IP
- Tipo de navegador
- Sistema operativo
- Páginas visitadas
- Tiempo de permanencia
- Cookies y tecnologías similares

## 3. Cómo Utilizamos su Información

Utilizamos su información personal para:

✅ Proporcionar y mejorar nuestros servicios  
✅ Procesar transacciones y pedidos  
✅ Responder a sus consultas y solicitudes  
✅ Enviar comunicaciones de marketing (con su consentimiento)  
✅ Personalizar su experiencia  
✅ Cumplir con nuestras obligaciones legales  

## 4. Divulgación de su Información

Podemos compartir su información personal con:

### 4.1 Proveedores de Servicios
Terceros que nos ayudan a operar nuestro negocio (procesadores de pago, servicios de alojamiento, etc.)

### 4.2 Cumplimiento Legal
Cuando sea necesario para cumplir con la ley, procesos legales o solicitudes gubernamentales.

### 4.3 Protección de Derechos
Para proteger nuestros derechos, propiedad o seguridad, así como los de nuestros usuarios u otros.

## 5. Seguridad de Datos

Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información personal contra el acceso, uso o divulgación no autorizados.

![Seguridad de datos](https://via.placeholder.com/800x300)

## 6. Sus Derechos de Privacidad

Usted tiene derecho a:

- **Acceder** a los datos personales que tenemos sobre usted
- **Rectificar** cualquier información incorrecta
- **Eliminar** sus datos personales
- **Oponerse** al procesamiento de sus datos
- **Limitar** el procesamiento de sus datos
- **Portabilidad de datos** para transferir sus datos a otro servicio
- **Retirar su consentimiento** en cualquier momento

## 7. Cookies y Tecnologías Similares

Utilizamos cookies y tecnologías similares para:
- Mantener su sesión
- Recordar sus preferencias
- Analizar el uso del sitio
- Personalizar el contenido y la publicidad

Para más información, consulte nuestra [Política de Cookies](#).

## 8. Transferencias Internacionales de Datos

Sus datos personales pueden ser transferidos y procesados en países distintos al suyo. Tomamos medidas para garantizar que sus datos reciban un nivel adecuado de protección.

## 9. Privacidad de los Niños

Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos conscientemente información personal de niños.

## 10. Cambios a esta Política

Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre disponible en nuestro sitio web.

## 11. Contacto

Si tiene preguntas o inquietudes sobre esta Política de Privacidad, contáctenos en:

**CASAFORTE**  
Departamento de Privacidad  
Vía Calacalí, Quito, Ecuador  
Email: comercial@boonkerconstrucciones.com  
Teléfono: +593 988 539 589

---

© 2025 CASAFORTE. Todos los derechos reservados.`;
  
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