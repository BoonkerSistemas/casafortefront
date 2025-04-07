// preguntas-frecuentes.component.ts
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terminos-condiciones',
  imports: [NgFor,CommonModule,NgIf,NgForOf,MarkdownModule],
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss'],
  encapsulation: ViewEncapsulation.None // Esto es importante para que los estilos se apliquen al contenido Markdown

})
export class TerminosCondicionesComponent implements OnInit {
  markdownContent: string = `

*Última actualización: 7 de abril de 2025*

---

## 1. Introducción

Bienvenido a **CASAFORTE**. Estos Términos y Condiciones regulan el uso de nuestro sitio web, productos y servicios. Al acceder a nuestro sitio o utilizar nuestros servicios, usted acepta cumplir con estos términos.

## 2. Definiciones

- **"Servicios"**: Todos los productos, servicios, contenido, características, tecnologías o funcionalidades ofrecidas por CASAFORTE.
- **"Usuario"**: Cualquier persona que acceda, navegue o utilice nuestro sitio web o servicios.
- **"Contenido"**: Cualquier información, datos, texto, software, música, sonido, fotografías, gráficos, videos, mensajes u otros materiales.

## 3. Uso del Servicio

### 3.1 Requisitos de Elegibilidad

Para utilizar nuestros servicios, usted debe:
- Tener al menos 18 años de edad
- Registrarse con información verdadera y completa
- Mantener la información de su cuenta actualizada

### 3.2 Cuenta y Seguridad

Usted es responsable de:
- Mantener la confidencialidad de su contraseña
- Limitar el acceso a su computadora o dispositivo
- Notificarnos de cualquier uso no autorizado de su cuenta

## 4. Derechos de Propiedad Intelectual

### 4.1 Propiedad del Contenido

Todo el contenido presente en nuestro sitio web es propiedad de CASAFORTE o se utiliza con permiso. Este contenido está protegido por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.

### 4.2 Uso Limitado

Se le otorga una licencia limitada, no exclusiva y no transferible para acceder y utilizar nuestros servicios para fines personales y no comerciales.

## 5. Restricciones de Uso

Usted acepta no:
- Usar nuestros servicios para fines ilegales
- Violar los derechos de propiedad intelectual de CASAFORTE u otros
- Enviar contenido que sea ilegal, ofensivo, difamatorio o invasivo de la privacidad
- Intentar acceder a cuentas de otros usuarios o sistemas informáticos de CASAFORTE
- Utilizar técnicas de extracción de datos o robots en nuestro sitio

## 6. Modificaciones

CASAFORTE se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web. El uso continuado de nuestros servicios constituye su aceptación de los términos modificados.

## 7. Limitación de Responsabilidad

En la máxima medida permitida por la ley aplicable, CASAFORTE no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos.

## 8. Indemnización

Usted acepta indemnizar y mantener indemne a CASAFORTE, sus directores, empleados y agentes de cualquier reclamación, demanda o daño que surja de su uso de nuestros servicios o la violación de estos Términos y Condiciones.

## 9. Terminación

CASAFORTE puede, a su sola discreción, terminar o suspender su acceso a nuestros servicios, por cualquier razón, incluido el incumplimiento de estos Términos y Condiciones.

## 10. Legislación Aplicable

Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de España, sin consideración a sus disposiciones sobre conflictos de leyes.

## 11. Contacto

Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos a:

**CASAFORTE**  
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