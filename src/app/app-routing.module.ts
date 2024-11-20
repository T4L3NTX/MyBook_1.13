import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]

  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'arquitectura',
    loadChildren: () => import('./arquitectura/arquitectura.module').then( m => m.ArquitecturaPageModule)
  },
  {
    path: 'calidad-software',
    loadChildren: () => import('./calidad-software/calidad-software.module').then( m => m.CalidadSoftwarePageModule)
  },
  {
    path: 'estadistica',
    loadChildren: () => import('./estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },
  {
    path: 'etica',
    loadChildren: () => import('./etica/etica.module').then( m => m.EticaPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'meet-admin',
    loadChildren: () => import('./meet-admin/meet-admin.module').then( m => m.MeetAdminPageModule)
  },
  {
    path: 'meet',
    loadChildren: () => import('./meet/meet.module').then( m => m.MeetPageModule)
  },
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then( m => m.PortafolioPageModule)
  },
  {
    path: 'movil',
    loadChildren: () => import('./movil/movil.module').then( m => m.MovilPageModule)
  },
  {
    path: 'nota',
    loadChildren: () => import('./nota/nota.module').then( m => m.NotaPageModule)
  },
  {
    path: 'admin-arquitectura',
    loadChildren: () => import('./admin-arquitectura/admin-arquitectura.module').then( m => m.AdminArquitecturaPageModule)
  },
  {
    path: 'admin-calidad-software',
    loadChildren: () => import('./admin-calidad-software/admin-calidad-software.module').then( m => m.AdminCalidadSoftwarePageModule)
  },
  {
    path: 'admin-estadistica',
    loadChildren: () => import('./admin-estadistica/admin-estadistica.module').then( m => m.AdminEstadisticaPageModule)
  },
  {
    path: 'admin-etica',
    loadChildren: () => import('./admin-etica/admin-etica.module').then( m => m.AdminEticaPageModule)
  },
  {
    path: 'admin-ingles',
    loadChildren: () => import('./admin-ingles/admin-ingles.module').then( m => m.AdminInglesPageModule)
  },
  {
    path: 'admin-portafolio',
    loadChildren: () => import('./admin-portafolio/admin-portafolio.module').then( m => m.AdminPortafolioPageModule)
  },
  {
    path: 'admin-programacion-movil',
    loadChildren: () => import('./admin-programacion-movil/admin-programacion-movil.module').then( m => m.AdminProgramacionMovilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
