import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInglesPageRoutingModule } from './admin-ingles-routing.module';

import { AdminInglesPage } from './admin-ingles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInglesPageRoutingModule
  ],
  declarations: [AdminInglesPage]
})
export class AdminInglesPageModule {}
