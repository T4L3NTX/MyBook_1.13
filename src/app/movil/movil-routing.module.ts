import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovilPage } from './movil.page';

const routes: Routes = [
  {
    path: '',
    component: MovilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovilPageRoutingModule {}
