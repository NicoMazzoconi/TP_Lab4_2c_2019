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


  salir()
  {
    this.router.navigate(["login"]);
    localStorage.clear();
  }
}
