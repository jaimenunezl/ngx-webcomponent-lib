import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExampleModule } from './example.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(ExampleModule)
  .catch((err) => console.error(err));
