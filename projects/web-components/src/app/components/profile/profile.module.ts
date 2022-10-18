import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebComponentBase } from '../../shared/classes/web-component.base';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ProfileComponent],
})
export class ProfileModule extends WebComponentBase {
  constructor(injector: Injector) {
    super(injector, ProfileComponent, 'profile');
  }
}
