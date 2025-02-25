import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));

    function loadGoogleMaps() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.apiGoogle}`;
        script.async = true;
        console.log('AGREGE EL SCRIPT');
        
        script.defer = true;
        document.head.appendChild(script);
      }
      
      loadGoogleMaps();