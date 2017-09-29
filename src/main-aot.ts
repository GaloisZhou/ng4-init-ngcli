import {enableProdMode} from '@angular/core';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {platformBrowser} from '@angular/platform-browser';

// import {AppModule} from './app/app.module';
import {AppModuleNgFactory} from '../aot/src/app/app.module.ngfactory';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  .catch(err => console.log(err));
