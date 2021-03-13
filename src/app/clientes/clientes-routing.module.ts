import { PaisesComponent } from './pages/paises/paises.component';
import { FacturasComponent } from './pages/paises/facturas/facturas.component';
import { AlbaranesComponent } from './pages/albaranes/albaranes.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    { 
        path: '',
        children: [

            { path: 'mantenimiento', component: MantenimientoComponent },
            { path: 'albaranes', component: AlbaranesComponent },
            { path: 'facturas', component: FacturasComponent  },
            { path: 'paises', component: PaisesComponent  },
            { path: '**', redirectTo: 'mantenimiento'}
        ]
        
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {}
