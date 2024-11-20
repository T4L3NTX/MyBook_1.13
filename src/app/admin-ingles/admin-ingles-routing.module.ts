import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminInglesPage } from './admin-ingles.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInglesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminInglesPageRoutingModule {}
