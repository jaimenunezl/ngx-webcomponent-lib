import { Component, Input, EventEmitter, Output } from '@angular/core';
interface ISmartphone {
  brand: string;
  description: string;
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

@Component({
  selector: 'eco-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  @Input() smartphonesList: ISmartphone[] = [];
  @Output() onBuyClickEmitter = new EventEmitter<ISmartphone>();

  constructor() {}

  onBuyClick(smarthphone: ISmartphone) {
    this.onBuyClickEmitter.emit(smarthphone);
  }
}
