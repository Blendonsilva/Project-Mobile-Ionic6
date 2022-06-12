import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosPageRoutingModule } from './motos-routing.module';

import { MotosPage } from './motos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MotosPage]
})
export class MotosPageModule {}
