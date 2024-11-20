import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCalidadSoftwarePageRoutingModule } from './admin-calidad-software-routing.module';

import { AdminCalidadSoftwarePage } from './admin-calidad-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCalidadSoftwarePageRoutingModule
  ],
  declarations: [AdminCalidadSoftwarePage]
})
export class AdminCalidadSoftwarePageModule {}
