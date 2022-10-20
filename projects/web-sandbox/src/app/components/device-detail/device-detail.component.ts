import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goNextStep(e: any | CustomEvent) {
    window.location.assign(e.detail);
  }
}
