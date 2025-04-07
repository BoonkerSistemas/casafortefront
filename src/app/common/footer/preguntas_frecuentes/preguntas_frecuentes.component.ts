// preguntas-frecuentes.component.ts
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
}

@Component({
  selector: 'app-preguntas-frecuentes',
  imports: [NgFor,CommonModule,NgIf,NgForOf],
  templateUrl: './preguntas_frecuentes.component.html',
  styleUrls: ['./preguntas_frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {
  activeCategory: string = 'general';
  openQuestions: { [key: string]: boolean } = {};
  
  categories: Category[] = [
    { id: 'general', name: 'General' },
    { id: 'productos', name: 'Productos' },
    { id: 'construccion', name: 'Construcción' },
    { id: 'presupuestos', name: 'Presupuestos' },
    { id: 'garantias', name: 'Garantías' }
  ];

  faqs: { [key: string]: Faq[] } = {
    general: [
      {
        id: 'general-1',
        question: '¿Qué es CASAFORTE?',
        answer: 'CASAFORTE es una empresa especializada en soluciones estructurales para viviendas en serie, ofreciendo sistemas constructivos innovadores que combinan eficiencia, durabilidad y sostenibilidad. Nuestro sistema estructural está diseñado específicamente para proyectos de viviendas desde 50m² hasta 120m².'
      },
      {
        id: 'general-2',
        question: '¿Dónde opera CASAFORTE?',
        answer: 'Actualmente, CASAFORTE opera en todo Ecuador, con proyectos realizados en diferentes comunidades autónomas. Estamos en proceso de expansión internacional, especialmente en países de Latinoamérica.'
      },
      {
        id: 'general-3',
        question: '¿Cuáles son las ventajas principales de trabajar con CASAFORTE?',
        answer: 'Las principales ventajas incluyen: reducción significativa de tiempos de construcción, alta eficiencia energética, resistencia superior a eventos sísmicos, flexibilidad de diseño, y una excelente relación calidad-precio que beneficia tanto a constructores como a propietarios finales.'
      }
    ],
    productos: [
      {
        id: 'productos-1',
        question: '¿Qué tipos de sistemas constructivos ofrece CASAFORTE?',
        answer: 'CASAFORTE ofrece un sistema estructural principal basado en tecnología avanzada para viviendas en serie, adaptable a diferentes necesidades y diseños. Nuestro sistema incluye componentes prefabricados que se ensamblan in situ, reduciendo tiempos y costos de construcción.'
      },
      {
        id: 'productos-2',
        question: '¿Sus productos cumplen con las normativas de construcción?',
        answer: 'Sí, todos nuestros productos y sistemas cumplen con el Código Técnico de la Edificación (CTE) de Ecuador y otras normativas internacionales relevantes. Contamos con todas las certificaciones necesarias que garantizan la calidad y seguridad de nuestras soluciones constructivas.'
      },
      {
        id: 'productos-3',
        question: '¿Son sus sistemas adecuados para diferentes climas?',
        answer: 'Sí, nuestros sistemas están diseñados para adaptarse a diferentes condiciones climáticas, desde climas cálidos hasta fríos extremos. Ofrecemos diferentes opciones de aislamiento y acabados según las necesidades específicas de cada zona geográfica.'
      }
    ],
    construccion: [
      {
        id: 'construccion-1',
        question: '¿Cuál es el tiempo medio de construcción con su sistema?',
        answer: 'El tiempo medio de construcción utilizando nuestro sistema es aproximadamente un 40-50% menor que con métodos tradicionales. Una vivienda estándar de 100m² puede estar lista estructuralmente en aproximadamente 3-4 semanas, dependiendo de la complejidad del diseño.'
      },
      {
        id: 'construccion-2',
        question: '¿Necesito contratar especialistas para instalar sus sistemas?',
        answer: 'Aunque nuestros sistemas están diseñados para ser relativamente sencillos de instalar, recomendamos trabajar con equipos formados o certificados por CASAFORTE para garantizar los mejores resultados. Ofrecemos formación a equipos de construcción locales y también podemos recomendar profesionales certificados en su área.'
      },
      {
        id: 'construccion-3',
        question: '¿Qué tipo de mantenimiento requieren sus estructuras?',
        answer: 'Nuestras estructuras requieren un mantenimiento mínimo en comparación con los sistemas tradicionales. Recomendamos una inspección visual anual y un mantenimiento preventivo cada 5 años. Proporcionamos un manual detallado de mantenimiento con cada proyecto.'
      }
    ],
    presupuestos: [
      {
        id: 'presupuestos-1',
        question: '¿Cómo puedo solicitar un presupuesto?',
        answer: 'Puede solicitar un presupuesto a través de nuestro formulario en línea, por correo electrónico a presupuestos@casaforte.com o llamando directamente a nuestro departamento comercial al +34 123 456 789. Necesitaremos información básica sobre su proyecto para proporcionarle una estimación inicial.'
      },
      {
        id: 'presupuestos-2',
        question: '¿Cuál es el coste aproximado por metro cuadrado?',
        answer: 'El coste aproximado por metro cuadrado varía según la complejidad del proyecto, acabados seleccionados y ubicación. Sin embargo, como referencia, nuestros sistemas suelen suponer un ahorro del 15-20% respecto a métodos constructivos tradicionales, considerando la relación calidad-precio-tiempo.'
      },
      {
        id: 'presupuestos-3',
        question: '¿Ofrecen financiación o facilidades de pago?',
        answer: 'Trabajamos con varias entidades financieras que ofrecen productos específicos para proyectos que utilizan nuestros sistemas. Además, para constructoras y promotoras, ofrecemos diversos esquemas de pago adaptados a las fases del proyecto.'
      }
    ],
    garantias: [
      {
        id: 'garantias-1',
        question: '¿Qué garantías ofrecen con sus productos?',
        answer: 'Ofrecemos una garantía estructural de 10 años en todos nuestros sistemas, además de las garantías legales establecidas por la Ley de Ordenación de la Edificación. También proporcionamos garantías específicas para diferentes componentes del sistema.'
      },
      {
        id: 'garantias-2',
        question: '¿Qué ocurre si hay algún problema con la instalación?',
        answer: 'En caso de problemas relacionados con la instalación, contamos con un equipo técnico de respuesta rápida que evaluará la situación y proporcionará soluciones. Si la instalación fue realizada por un equipo certificado por CASAFORTE, la resolución de problemas está cubierta por nuestra garantía.'
      },
      {
        id: 'garantias-3',
        question: '¿Son sus sistemas resistentes a terremotos e incendios?',
        answer: 'Sí, nuestros sistemas están diseñados y certificados para ofrecer una resistencia superior ante eventos sísmicos, cumpliendo con las normativas más exigentes. En cuanto a la resistencia al fuego, todos nuestros componentes cumplen o exceden los requisitos establecidos en el Código Técnico de la Edificación.'
      }
    ]
  };

  constructor() { }

  ngOnInit(): void { }

  setActiveCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  toggleQuestion(id: string): void {
    this.openQuestions[id] = !this.openQuestions[id];
  }

  isQuestionOpen(id: string): boolean {
    return this.openQuestions[id] === true;
  }
}