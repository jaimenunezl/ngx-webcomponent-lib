import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export abstract class WebComponentBase {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    const ngElement = createCustomElement(component, {
      injector,
    });

    customElements.define(`eco-${name}`, ngElement);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngDoBootstrap() {}
}
