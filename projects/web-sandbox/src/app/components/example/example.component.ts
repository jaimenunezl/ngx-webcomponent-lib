import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface ISmartphone {
  brand: string;
  description: string;
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

@Component({
  selector: 'app-example',
  template: `<wceco-example
    [smartphonesList]="smartphonesList"
    (onBuyClickEmitter)="onBuyFn($event)"
  ></wceco-example>`,
})
export class ExampleComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  smartphonesList: ISmartphone[] = [];

  ngOnInit() {
    this.getSmartPhones().subscribe((e) => {
      this.smartphonesList = e;
      console.log(e);
    });
  }

  getSmartPhones() {
    return this.httpClient
      .get(`https://dummyjson.com/products/category/smartphones`)
      .pipe(map((data: any) => data.products));
  }

  onBuyFn(e: Event) {
    const detail = (<CustomEvent>e).detail;
    console.log(detail);
  }
}
