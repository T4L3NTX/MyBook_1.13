import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCalidadSoftwarePage } from './admin-calidad-software.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCalidadSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCalidadSoftwarePageRoutingModule {}
