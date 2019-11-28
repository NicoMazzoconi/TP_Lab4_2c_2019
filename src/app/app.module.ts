import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//importo mis componentes
import {RecaptchaModule} from 'ng-recaptcha';
import { MesasComponent } from './componentes/mesas/mesas.component';

//para las tabs animadas
import {MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
//importo lo de primeng
import {PickListModule} from 'primeng/picklist';
import { PedidoNuevoComponent } from './componentes/pedido-nuevo/pedido-nuevo.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { MesasDispComponent } from './componentes/mesas-disp/mesas-disp.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { PedidoRutaComponent } from './componentes/pedido-ruta/pedido-ruta.component';
import { CartaSociosComponent } from './componentes/carta-socios/carta-socios.component';
import { MisPedidosComponent } from './componentes/mis-pedidos/mis-pedidos.component';

import { CookieService } from "ngx-cookie-service";
import { LeerMasComponent } from './componentes/leer-mas/leer-mas.component';
import { FacturaComponent } from './componentes/factura/factura.component';

import { NgQrScannerModule } from 'angular2-qrscanner';
import { PrevioMesasQRComponent } from './componentes/previo-mesas-qr/previo-mesas-qr.component';
import { PesosPipe } from './pipes/pesos.pipe';
import { ColorDirective } from './directivas/color.directive';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CambiarFotoComponent } from './componentes/cambiar-foto/cambiar-foto.component';
import { LogsComponent } from './componentes/logs/logs.component';
import { GraficoLogsComponent } from './componentes/grafico-logs/grafico-logs.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MesasComponent,
    UsuariosComponent,
    PrincipalComponent,
    SobreNosotrosComponent,
    PedidosComponent,
    PedidoNuevoComponent,
    CartaComponent,
    MesasDispComponent,
    SociosComponent,
    PedidoRutaComponent,
    CartaSociosComponent,
    MisPedidosComponent,
    LeerMasComponent,
    FacturaComponent,
    PrevioMesasQRComponent,
    PesosPipe,
    ColorDirective,
    FotosComponent,
    CambiarFotoComponent,
    LogsComponent,
    GraficoLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RecaptchaModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    PickListModule,
    NgQrScannerModule,
    ChartsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
