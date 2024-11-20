import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetAdminPageRoutingModule } from './meet-admin-routing.module';

import { MeetAdminPage } from './meet-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MeetAdminPageRoutingModule
  ],
  declarations: [MeetAdminPage]
})
export class MeetAdminPageModule {}
