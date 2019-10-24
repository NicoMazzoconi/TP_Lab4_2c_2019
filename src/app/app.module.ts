import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MesaListadoComponent } from './componentes/mesa-listado/mesa-listado.component'
 
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MesaListadoComponent
  ],
  imports: [
    RecaptchaModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCrjQ8yG4VxHW5Ac5plg4e9vuHSSCatMzs",
      authDomain: "lacomanda-81155.firebaseapp.com",
      databaseURL: "https://lacomanda-81155.firebaseio.com",
      projectId: "lacomanda-81155",
      storageBucket: "lacomanda-81155.appspot.com",
      messagingSenderId: "1014100247612",
      appId: "1:1014100247612:web:01a4e0e099a1707a822f39",
      measurementId: "G-NLFM829T76"
    }),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
