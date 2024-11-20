import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProgramacionMovilPage } from './admin-programacion-movil.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProgramacionMovilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProgramacionMovilPageRoutingModule {}
