import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SitemapService {
  constructor(private router: Router) {}

  generateSitemap() {
    const urls = this.router.config
      .filter((route) => route.path) // Filtrar rutas válidas
      .map((route) => `${environment.url}/${route.path}`); // Ajustar según el dominio

    return this.convertToSitemap(urls);
  }

  private convertToSitemap(urls: string[]) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image">`;

    urls.forEach((url) => {
      xml += `<url><loc>${url}</loc></url>`;
    });

    xml += `</urlset>`;
    return xml;
  }
}
