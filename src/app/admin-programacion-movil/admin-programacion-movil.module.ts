import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProgramacionMovilPageRoutingModule } from './admin-programacion-movil-routing.module';

import { AdminProgramacionMovilPage } from './admin-programacion-movil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProgramacionMovilPageRoutingModule
  ],
  declarations: [AdminProgramacionMovilPage]
})
export class AdminProgramacionMovilPageModule {}
