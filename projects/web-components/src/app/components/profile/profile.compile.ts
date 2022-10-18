import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProfileModule } from './profile.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(ProfileModule)
  .catch((err) => console.error(err));
