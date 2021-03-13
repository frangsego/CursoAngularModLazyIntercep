import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbaranesComponent } from './pages/albaranes/albaranes.component';
import { FacturasComponent } from './pages/paises/facturas/facturas.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { ClientesRoutingModule } from './clientes-routing.module';


@NgModule({
  declarations: [AlbaranesComponent, FacturasComponent, MantenimientoComponent, PaisesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
