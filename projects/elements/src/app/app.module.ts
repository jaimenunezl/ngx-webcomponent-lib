import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from 'projects/components/src/lib/components.module';
import { WebcomponentFourComponent } from 'projects/components/src/lib/components/webcomponent-four/webcomponent-four.component';
import { WebcomponentOneComponent } from 'projects/components/src/lib/components/webcomponent-one/webcomponent-one.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const one = createCustomElement(WebcomponentOneComponent, {
      injector: this.injector,
    });
    const four = createCustomElement(WebcomponentFourComponent, {
      injector: this.injector,
    });
    customElements.define('eco-webcomponent-one', one);

    customElements.define('eco-webcomponent-four', four);
  }
}
