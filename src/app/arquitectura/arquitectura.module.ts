import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArquitecturaPageRoutingModule } from './arquitectura-routing.module';

import { ArquitecturaPage } from './arquitectura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ArquitecturaPageRoutingModule
  ],
  declarations: [ArquitecturaPage]
})
export class ArquitecturaPageModule {}
