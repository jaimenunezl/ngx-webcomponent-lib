import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<wceco-example
    [smartphonesList]="smartphonesList"
    (onBuyClickEmitter)="onBuyFn($event)"
  ></wceco-example>`,
})
export class ExampleComponent {}
