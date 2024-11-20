import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetAdminPage } from './meet-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MeetAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetAdminPageRoutingModule {}
