import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard'
import { MesaListadoComponent } from './componentes/mesa-listado/mesa-listado.component';

const routes: Routes = [
  {path: '', redirectTo: '/Principal', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent, canActivate: [AuthLoginGuard]},
  {path: 'Registro', component: RegistroComponent, canActivate: [AuthLoginGuard]},
  {path: 'Principal', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'MesasListado', component: MesaListadoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
