import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEticaPageRoutingModule } from './admin-etica-routing.module';

import { AdminEticaPage } from './admin-etica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEticaPageRoutingModule
  ],
  declarations: [AdminEticaPage]
})
export class AdminEticaPageModule {}
