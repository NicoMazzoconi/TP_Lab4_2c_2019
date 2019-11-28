import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public nombreUsuario:string;
  public passUsuario:string;
  public passUsuario2:string;

  public respuesta:any;

  public navegarLogin:boolean = false;

  constructor(public regServ:LogeoService, public router:Router) { }

  ngOnInit() {
  }


  entrar()
  {
    if(this.nombreUsuario == undefined || this.nombreUsuario.length < 2)
    {
      alert("el nombre de usuario debe tener mas de 3 digitos");
    }
    else if(this.passUsuario == this.passUsuario2)
    {
      this.regServ.registroCliente(this.nombreUsuario,this.passUsuario).subscribe(res=>
        {
          this.respuesta = res;
          //console.log(this.respuesta.respuesta)
          if(this.respuesta.respuesta.length < 25)
          {
            //es porque se cargo correctamente
            alert(this.respuesta.respuesta);
            this.navegar();

          }
          else
          {
            //no se cargo correctamente
            alert(this.respuesta.respuesta );
          }
        });
    }
    else
    {
      alert("las contraseñas deben coincidir!");
    }

  }

  navegar()
  {
    this.router.navigate(['login']);
  }
  cancelar()
  {
    this.navegar();
  }
}
