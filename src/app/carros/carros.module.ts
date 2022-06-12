import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosPageRoutingModule } from './carros-routing.module';

import { CarrosPage } from './carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosPageRoutingModule
  ],
  declarations: [CarrosPage]
})
export class CarrosPageModule {}
