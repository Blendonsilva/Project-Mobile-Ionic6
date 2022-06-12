import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosPage } from './carros.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosPageRoutingModule {}
