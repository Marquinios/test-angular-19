import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    // HashStrategy
    /* {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    } */

    /* 
    Es un indicador para que cualquier URL pase por el path root => /
    Añade un #, como path padre para que cualquier pagina dentro de la aplicacion 
    pueda ser accedida y visualizada 
    */
  ]
};
