import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminArquitecturaPageRoutingModule } from './admin-arquitectura-routing.module';

import { AdminArquitecturaPage } from './admin-arquitectura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminArquitecturaPageRoutingModule
  ],
  declarations: [AdminArquitecturaPage]
})
export class AdminArquitecturaPageModule {}
