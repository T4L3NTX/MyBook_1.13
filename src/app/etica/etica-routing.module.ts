import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EticaPage } from './etica.page';

const routes: Routes = [
  {
    path: '',
    component: EticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EticaPageRoutingModule {}
