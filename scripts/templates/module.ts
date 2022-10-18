import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebComponentBase } from '../../shared/classes/web-component.base';
import { <COMPONENT_PASCAL> } from './<COMPONENT_PARAM>.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [<COMPONENT_PASCAL>],
})
export class <MODULE_PASCAL> extends WebComponentBase {
  constructor(injector: Injector) {
    super(injector, <COMPONENT_PASCAL>, 'ecowc-<COMPONENT_PARAM>');
  }
}
