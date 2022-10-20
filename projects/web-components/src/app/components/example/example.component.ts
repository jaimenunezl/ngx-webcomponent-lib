import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eco-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  @Input() title = '';
  @Input() nextPage = '';
  @Output() goToNextPageEmitter = new EventEmitter();

  constructor() {}

  goToNextPage() {
    this.goToNextPageEmitter.emit(this.nextPage);
  }
}
