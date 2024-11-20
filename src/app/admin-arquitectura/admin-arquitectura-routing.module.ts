import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminArquitecturaPage } from './admin-arquitectura.page';

const routes: Routes = [
  {
    path: '',
    component: AdminArquitecturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminArquitecturaPageRoutingModule {}
