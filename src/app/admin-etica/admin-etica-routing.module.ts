import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEticaPage } from './admin-etica.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEticaPageRoutingModule {}
