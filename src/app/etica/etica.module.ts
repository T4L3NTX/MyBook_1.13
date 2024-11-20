import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EticaPageRoutingModule } from './etica-routing.module';

import { EticaPage } from './etica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EticaPageRoutingModule
  ],
  declarations: [EticaPage]
})
export class EticaPageModule {}
