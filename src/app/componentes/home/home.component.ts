import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nombreingresado;

  public tipo;
  //////////////////-----------------------------------------



  //-----------------------------------------------------
  constructor(public miServ:LogeoService, public router:Router) { 
    
  }

  ngOnInit() {
    
    this.nombreingresado = localStorage.getItem("nombreingresado");
    //console.log(this.nombreingresado);
    this.tipo = localStorage.getItem("tipo");

    
    
    
  }

  hacer()
  {
    let tipo = localStorage.getItem("tipo");
    if(tipo == "cliente")
    {
      alert("no podes entrar, solo socios");
      this.router.navigate(['home/ppal']);
      //let appUsuarios = document.getElementById("usuarios");
      //appUsuarios.style.display = "none";
    }
  }


  salir()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
  }
}
