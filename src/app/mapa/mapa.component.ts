import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare const google: any;

@Component({
  selector: 'app-mapa-ecuador',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MapaEcuadorComponent implements OnInit, AfterViewInit {
  map!: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (typeof google !== 'undefined' && google.maps) {
      this.loadMap();
    } else {
      console.warn('Google Maps API no cargada inmediatamente. Reintentando...');
      const checkGoogleMaps = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps) {
          clearInterval(checkGoogleMaps);
          this.loadMap();
        }
      }, 500); // Revisa cada 500ms hasta que Google Maps esté disponible

      // Detener el intervalo después de 10 intentos (5 segundos)
      setTimeout(() => clearInterval(checkGoogleMaps), 5000);
    }
  }

  private loadMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('El contenedor del mapa no se encuentra');
      return;
    }

    this.map = new google.maps.Map(mapContainer, {
      center: { lat: -1.8312, lng: -78.1834 },
      zoom: 6
    });

    this.loadGeoJson();
  }

  private async loadGeoJson() {
    try {
      const response = await fetch('assets/provincias-ecuador.json');
      if (!response.ok) throw new Error('Error al cargar el GeoJSON');

      const geojson = await response.json();
      this.map.data.addGeoJson(geojson);

      this.map.data.setStyle({
        fillColor: '#3388ff',
        strokeWeight: 2
      });

      this.map.data.addListener('click', (event: any) => {
        const provincia = event.feature.getProperty('NOMBRE_PROV');
        alert(`Hiciste clic en ${provincia}`);
      });
    } catch (error) {
      console.error('Error al cargar el GeoJSON:', error);
    }
  }
}
