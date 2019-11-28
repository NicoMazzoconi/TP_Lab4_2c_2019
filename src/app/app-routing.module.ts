import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { MesasComponent } from './componentes/mesas/mesas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { PedidoNuevoComponent } from './componentes/pedido-nuevo/pedido-nuevo.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { MesasDispComponent } from './componentes/mesas-disp/mesas-disp.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { PedidoRutaComponent } from './componentes/pedido-ruta/pedido-ruta.component';
import { CartaSociosComponent } from './componentes/carta-socios/carta-socios.component';
import { MisPedidosComponent } from './componentes/mis-pedidos/mis-pedidos.component';
import { LeerMasComponent } from './componentes/leer-mas/leer-mas.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { PrevioMesasQRComponent } from './componentes/previo-mesas-qr/previo-mesas-qr.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CambiarFotoComponent } from './componentes/cambiar-foto/cambiar-foto.component';
import { LogsComponent } from './componentes/logs/logs.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent ,children:
       [ 
         {path: 'ppal' , component: PrincipalComponent},
         {path: 'sobreNosotros' , component: SobreNosotrosComponent},    
         { path: 'pedidoNuevo', component: PedidoNuevoComponent },
         { path: 'rutaPedido', component: PedidoRutaComponent },
         { path: 'carta', component: CartaComponent },
         { path: 'mesasDisponiblesTrue', component: MesasDispComponent },
         { path: 'mesasDisponibles', component: PrevioMesasQRComponent },
         { path: 'misPedidos', component: MisPedidosComponent },
         { path: 'leerMas', component: LeerMasComponent },
         { path: 'fotos', component: FotosComponent },
         { path: 'cambiarFoto', component: CambiarFotoComponent},


         { path: 'socios', component: SociosComponent, children:
            [
              {path: 'pedidos' , component: PedidosComponent},
              {path: 'traerUsuarios' , component: UsuariosComponent},
              {path: 'mesas' , component: MesasComponent},
              {path: 'menu' , component: CartaSociosComponent},
              {path: 'factura' , component: FacturaComponent},
              {path: 'logs', component: LogsComponent}
            ]
          },



        ]
  },

  



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
