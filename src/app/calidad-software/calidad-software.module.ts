import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalidadSoftwarePageRoutingModule } from './calidad-software-routing.module';

import { CalidadSoftwarePage } from './calidad-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CalidadSoftwarePageRoutingModule
  ],
  declarations: [CalidadSoftwarePage]
})
export class CalidadSoftwarePageModule {}
