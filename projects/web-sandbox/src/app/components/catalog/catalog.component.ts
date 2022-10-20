import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goNextStep(e: any | CustomEvent) {
    window.location.assign(e.detail);
  }
}
