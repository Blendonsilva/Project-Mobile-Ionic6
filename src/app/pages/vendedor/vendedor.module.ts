import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorPageRoutingModule } from './vendedor-routing.module';

import { VendedorPage } from './vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VendedorPage]
})
export class VendedorPageModule {}
