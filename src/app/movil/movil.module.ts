import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovilPageRoutingModule } from './movil-routing.module';

import { MovilPage } from './movil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovilPageRoutingModule
  ],
  declarations: [MovilPage]
})
export class MovilPageModule {}
