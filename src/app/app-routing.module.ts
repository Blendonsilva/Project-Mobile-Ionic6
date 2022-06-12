import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./carros/carros.module').then( m => m.CarrosPageModule)
  },
  {
    path: 'motos',
    loadChildren: () => import('./pages/motos/motos.module').then( m => m.MotosPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./pages/vendedor/vendedor.module').then( m => m.VendedorPageModule)
  },
  {
    path: 'gerente',
    loadChildren: () => import('./pages/gerente/gerente.module').then( m => m.GerentePageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
