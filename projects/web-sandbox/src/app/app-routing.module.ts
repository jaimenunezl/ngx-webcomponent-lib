import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogComponent },
  { path: 'detalle', component: DeviceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
