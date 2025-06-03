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

En **CASAFORTE**, su privacidad es fundamental para nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y gestionamos su información personal cuando visita nuestro sitio web, utiliza nuestros servicios o interactúa con nosotros.

Al usar nuestros servicios, usted acepta las prácticas descritas en esta política. Le recomendamos leer este documento completo para comprender nuestros compromisos con su privacidad.

## 2. Información que Recopilamos

### 2.1 Información Personal Directa

Recopilamos información que usted nos proporciona voluntariamente:

| **Tipo de Información** | **Finalidad** | **Base Legal** | **Retención** |
|-------------------------|---------------|----------------|---------------|
| Nombre y apellidos | Identificación y comunicación personal | Consentimiento | 5 años desde último contacto |
| Correo electrónico | Comunicación, soporte y marketing | Consentimiento | Hasta revocación del consentimiento |
| Número de teléfono | Asistencia técnica y comercial | Consentimiento | 3 años desde último contacto |
| Dirección postal | Entrega de productos y servicios | Ejecución contractual | Durante la relación comercial |
| Datos de facturación | Procesamiento de pagos y contabilidad | Obligación legal | 7 años (requisito fiscal) |
| Información del proyecto | Personalización de soluciones estructurales | Ejecución contractual | 10 años (archivo técnico) |

### 2.2 Información Técnica Automática

Recopilamos automáticamente cuando visita nuestro sitio:

✅ **Datos de navegación**: Dirección IP, tipo de navegador, idioma del sistema  
✅ **Comportamiento web**: Páginas visitadas, tiempo de permanencia, clicks realizados  
✅ **Información del dispositivo**: Sistema operativo, resolución de pantalla, tipo de dispositivo  
✅ **Datos de rendimiento**: Velocidad de carga, errores encontrados  
✅ **Geolocalización aproximada**: Ciudad y país (basado en IP)  
✅ **Referencia de origen**: Sitio web desde el cual llegó a nosotros  

### 2.3 Cookies y Tecnologías de Seguimiento

Utilizamos diferentes tipos de cookies:

- **Cookies esenciales**: Necesarias para el funcionamiento básico del sitio
- **Cookies de rendimiento**: Para analizar y mejorar la experiencia del usuario
- **Cookies de funcionalidad**: Para recordar sus preferencias
- **Cookies de marketing**: Para mostrar contenido relevante (solo con su consentimiento)

## 3. Cómo Utilizamos su Información

### 3.1 Finalidades Principales

✅ **Prestación de servicios**: Diseño, fabricación y entrega de soluciones estructurales  
✅ **Comunicación**: Responder consultas, brindar soporte técnico y actualizaciones de proyectos  
✅ **Mejora continua**: Optimizar nuestros productos y servicios basados en su feedback  
✅ **Cumplimiento legal**: Satisfacer obligaciones fiscales, contables y regulatorias  
✅ **Seguridad**: Prevenir fraudes y proteger la integridad de nuestros sistemas  

### 3.2 Marketing y Comunicaciones (Solo con Consentimiento)

✅ **Newsletters**: Información sobre nuevos productos y soluciones  
✅ **Ofertas personalizadas**: Promociones basadas en sus intereses  
✅ **Invitaciones a eventos**: Seminarios técnicos y ferias del sector  
✅ **Contenido educativo**: Guías y recursos sobre construcción estructural  

> **Nota importante**: Puede retirar su consentimiento para comunicaciones de marketing en cualquier momento usando el enlace de "desuscribirse" en nuestros emails o contactándonos directamente.

## 4. Compartir su Información

### 4.1 Terceros Autorizados

Compartimos información únicamente con:

**🏢 Proveedores de servicios esenciales:**
- Procesadores de pago (para transacciones seguras)
- Servicios de alojamiento web y almacenamiento en la nube
- Empresas de logística y transporte
- Proveedores de análisis web (Google Analytics, etc.)

**⚖️ Requerimientos legales:**
- Autoridades gubernamentales cuando sea legalmente obligatorio
- Procesos judiciales o investigaciones oficiales
- Protección de derechos legales propios o de terceros

**🤝 Socios comerciales:**
- Solo para completar servicios solicitados por usted
- Arquitectos e ingenieros en proyectos colaborativos
- Instaladores certificados para montaje de estructuras

### 4.2 Transferencias Internacionales

Algunos de nuestros proveedores pueden estar ubicados fuera de Ecuador. En estos casos:
- Verificamos que ofrezcan protección adecuada de datos
- Utilizamos cláusulas contractuales estándar aprobadas
- Aplicamos medidas de seguridad adicionales según sea necesario

## 5. Seguridad y Protección de Datos

### 5.1 Medidas Técnicas

🔒 **Cifrado**: Utilizamos SSL/TLS para proteger datos en tránsito  
🔒 **Almacenamiento seguro**: Servidores con cifrado y acceso restringido  
🔒 **Respaldos**: Copias de seguridad regulares con cifrado  
🔒 **Monitoreo**: Supervisión continua de actividades sospechosas  

### 5.2 Medidas Organizacionales

🛡️ **Acceso limitado**: Solo personal autorizado puede acceder a datos personales  
🛡️ **Capacitación**: Formación regular del equipo en protección de datos  
🛡️ **Políticas internas**: Procedimientos estrictos de manejo de información  
🛡️ **Auditorías**: Revisiones periódicas de nuestras prácticas de seguridad  

## 6. Sus Derechos como Titular de Datos

Usted tiene los siguientes derechos sobre sus datos personales:

### 6.1 Derechos de Acceso y Control

**📋 Derecho de acceso**: Solicitar una copia de todos los datos que tenemos sobre usted  
**✏️ Derecho de rectificación**: Corregir información incorrecta o incompleta  
**🗑️ Derecho de eliminación**: Solicitar la eliminación de sus datos (con limitaciones legales)  
**⏸️ Derecho de limitación**: Restringir el procesamiento en ciertas circunstancias  

### 6.2 Derechos de Oposición y Consentimiento

**🚫 Derecho de oposición**: Oponerse al procesamiento por motivos legítimos  
**↩️ Retirada de consentimiento**: Retirar su consentimiento en cualquier momento  
**🚫 Oposición al marketing**: Oponerse específicamente a comunicaciones comerciales  

### 6.3 Cómo Ejercer sus Derechos

Para ejercer cualquiera de estos derechos:
1. Envíe una solicitud a: **comercial@boonkerconstrucciones.com**
2. Incluya una identificación válida para verificar su identidad
3. Especifique claramente qué derecho desea ejercer
4. Responderemos dentro de **15 días hábiles**

## 7. Retención de Datos

Conservamos sus datos personales solo el tiempo necesario para:

- **Datos contractuales**: Durante la relación comercial + 7 años (obligación fiscal)
- **Datos de marketing**: Hasta que retire su consentimiento
- **Datos técnicos**: 2 años desde la última interacción
- **Registros de comunicación**: 3 años para soporte y mejora del servicio

## 8. Datos de Menores de Edad

Nuestros servicios están dirigidos a profesionales y empresas del sector construcción. **No recopilamos conscientemente información de menores de 18 años**. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.

## 9. Cambios a esta Política

Podemos actualizar esta Política de Privacidad para reflejar:
- Cambios en nuestros servicios o procesos
- Nuevos requerimientos legales
- Mejoras en nuestras prácticas de privacidad

**Le notificaremos cambios significativos:**
- Por email si tiene una cuenta activa con nosotros
- Mediante aviso prominente en nuestro sitio web
- Los cambios entrarán en vigor 30 días después de la notificación

## 10. Base Legal para el Procesamiento

Procesamos sus datos personales basados en:

- **Consentimiento**: Para marketing y cookies no esenciales
- **Ejecución contractual**: Para prestación de servicios solicitados
- **Interés legítimo**: Para mejorar servicios y seguridad
- **Obligación legal**: Para cumplir requisitos fiscales y regulatorios

## 11. Contacto y Consultas

**📧 Email**: comercial@boonkerconstrucciones.com  
**📱 Teléfono**: +593 988 539 589  
**📍 Dirección**: Vía Calacalí, Quito, Ecuador  
**🕒 Horario de atención**: Lunes a Viernes, 8:00 AM - 6:00 PM  

**Para consultas específicas sobre privacidad:**
**Oficial de Protección de Datos**: privacidad@boonkerconstrucciones.com

### Autoridad de Control

Si considera que hemos violado sus derechos de privacidad, puede presentar una queja ante la **Superintendencia de Protección de Datos del Ecuador**.

---

**© 2025 CASAFORTE - Todos los derechos reservados.**

*Esta política está diseñada para cumplir con las mejores prácticas internacionales de protección de datos y la legislación ecuatoriana aplicable.*`;
  
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