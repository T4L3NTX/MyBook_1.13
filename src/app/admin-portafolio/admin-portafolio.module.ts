import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPortafolioPageRoutingModule } from './admin-portafolio-routing.module';

import { AdminPortafolioPage } from './admin-portafolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPortafolioPageRoutingModule
  ],
  declarations: [AdminPortafolioPage]
})
export class AdminPortafolioPageModule {}
