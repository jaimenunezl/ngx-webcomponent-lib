import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';

@NgModule({
  declarations: [AppComponent, CatalogComponent, DeviceDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
