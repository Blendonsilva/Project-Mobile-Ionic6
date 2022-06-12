import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorPage } from './vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorPageRoutingModule {}
