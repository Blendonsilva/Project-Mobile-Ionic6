import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosPage } from './motos.page';

const routes: Routes = [
  {
    path: '',
    component: MotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosPageRoutingModule {}
