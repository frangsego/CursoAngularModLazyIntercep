import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'usuarios', 
      loadChildren: () => import('./usuarios/usuarios.module')
      .then( m => m.UsuariosModule)
//      .catch()
  },
  {
    path: 'clientes', 
      loadChildren: () => import('./clientes/clientes.module')
      .then( m => m.ClientesModule)
//      .catch()
  },
  {
    path: 'proveedores', 
      canLoad: [ AuthGuard ],
      loadChildren: () => import('./proveedores/proveedores.module')
      .then( m => m.ProveedoresModule)
//      .catch()
  },
  {
    path: '**',
    redirectTo: 'clientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
