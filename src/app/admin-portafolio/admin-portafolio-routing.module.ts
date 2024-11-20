import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPortafolioPage } from './admin-portafolio.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPortafolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPortafolioPageRoutingModule {}
