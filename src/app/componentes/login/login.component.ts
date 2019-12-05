import { Component, OnInit } from '@angular/core';
import {LogeoService} from '../../servicios/logeo.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public nombreUsuario:string;
  public passUsuario:string;

  public respuesta;

  public color:boolean;

  constructor(public logServ:LogeoService, private router: Router) { }

  ngOnInit() {
    this.startTimer();
  }

  entrar()
  {
    this.logServ.login(this.nombreUsuario,this.passUsuario).subscribe(res =>
      {
        this.respuesta = res;

        if(this.respuesta.length < 40)
        {
          alert(this.respuesta);
        }
        else
        {
          localStorage.setItem("token",this.respuesta.token);
          localStorage.setItem("nombreingresado", this.respuesta.usuario.nombre);
          localStorage.setItem("tipo", this.respuesta.usuario.tipo);
          localStorage.setItem("idUsuario", this.respuesta.usuario.id);
          localStorage.setItem("foto", this.respuesta.usuario.urlFoto);
          if(this.respuesta.tipo == 'cliente')
          {
            this.router.navigate(['home/ppal']);
          }
          else
          {
            this.router.navigate(['home/socios']);
          }
        }
      });
  }

  resolved(captchaResponse: string) {
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
    let boton = document.getElementById("boton") as HTMLInputElement;
    boton.disabled = false;
  }

  registro()
  {
    this.router.navigate(['/registro']);
  }


  completar(tipo:string)
  {
    switch (tipo) {
      case 'mozo':
        this.nombreUsuario = "mozo1";
        this.passUsuario = "aassdd";
        break;

      case 'cliente':
        this.nombreUsuario = "cliente1";
        this.passUsuario = "aassdd";
        break;

      case 'socio':
        this.nombreUsuario = "Nico";
        this.passUsuario = "aassdd";
        break;

      case 'cocinero':
        this.nombreUsuario = "cocinero1";
        this.passUsuario = "aassdd";
        break;
      
      case 'bartender':
        this.nombreUsuario = "bartender1";
        this.passUsuario = "aassdd";
        break;

        case 'cervecero':
        this.nombreUsuario = "cervecero1";
        this.passUsuario = "aassdd";
        break;

    }
  }

  
  startTimer() {
   
    setInterval(() => {
  
      try
      {
        this.color = !this.color; 
      document.getElementById("spanRegistro").style.color= this.color ? "red" : "green";
      }
      catch
      {
        
      }


    },500)

  
    
  }

}
