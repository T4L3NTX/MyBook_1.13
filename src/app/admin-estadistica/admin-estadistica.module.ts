import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEstadisticaPageRoutingModule } from './admin-estadistica-routing.module';

import { AdminEstadisticaPage } from './admin-estadistica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEstadisticaPageRoutingModule
  ],
  declarations: [AdminEstadisticaPage]
})
export class AdminEstadisticaPageModule {}
