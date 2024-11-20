import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEstadisticaPage } from './admin-estadistica.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEstadisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEstadisticaPageRoutingModule {}
