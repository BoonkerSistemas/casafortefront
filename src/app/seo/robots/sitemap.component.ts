import { Component } from '@angular/core';
import {SitemapService} from "../../../service/seo/sitemap.service";

@Component({
  selector: 'app-sitemap',
  template: '', // No se necesita HTML
})
export class SitemapComponent {
  constructor(private sitemapService: SitemapService) {
    this.serveSitemap();
  }

  serveSitemap() {
    const sitemapXml = this.sitemapService.generateSitemap();

    // Establecer el tipo de contenido a 'application/xml'
    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);

    // Cambia la URL del navegador a `sitemap.xml`
    window.location.href = url;
  }
}
