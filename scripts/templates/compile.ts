import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { <MODULE_PASCAL> } from './<MODULE_PARAM>.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(<MODULE_PASCAL>)
  .catch((err) => console.error(err));
