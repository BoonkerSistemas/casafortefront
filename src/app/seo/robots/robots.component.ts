import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-robots',
  template: '', // No se necesita HTML
})
export class RobotsComponent {
  constructor() {
    this.displayRobotsTxt();
  }

  displayRobotsTxt() {
    const robotsTxt = `
      User-agent: *
      Allow: /
      Sitemap: ${environment.sitemapUrl}
    `;

    // Establecer el tipo de contenido a 'text/plain'
    const blob = new Blob([robotsTxt], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    // Cambia la URL del navegador a `robots.txt`
    window.location.href = url;
  }
}
