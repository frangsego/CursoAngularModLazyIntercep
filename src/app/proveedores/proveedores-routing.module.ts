import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {
    path:'', 
    children: [ 
    { path: 'compras', component: ComprasComponent },
    { path: 'almacen', component: AlmacenComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: '**', redirectTo: 'compras' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
