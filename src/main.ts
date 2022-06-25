import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, createEnvironmentInjector, enableProdMode, ENVIRONMENT_INITIALIZER, importProvidersFrom, NgZone } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/routes';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { ChildrenComponent } from './app/components/children/children.component';
import { createCustomElement } from '@angular/elements';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: () => () => {
        return new Promise((resolve) => setTimeout(() => {
          // alert('Fired')
          resolve(null);
        }, 5000))
      },
      // multi: true,
    },
    importProvidersFrom([
      BrowserModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      HttpClientModule,
    ]),
  ]
})