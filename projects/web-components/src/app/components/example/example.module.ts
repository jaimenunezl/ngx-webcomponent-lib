import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebComponentBase } from '../../shared/classes/web-component.base';
import { ExampleComponent } from './example.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ExampleComponent],
})
export class ExampleModule extends WebComponentBase {
  constructor(injector: Injector) {
    super(injector, ExampleComponent, 'example');
  }
}
