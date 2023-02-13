import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/** Uncomment for api routes debug */
// localStorage.setItem('debug', 'true');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
