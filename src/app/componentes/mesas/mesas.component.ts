import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  public mesas = [];

  public respuesta:any;

  public estadoMesas = [
    "cerrada",
    "con cliente comiendo",
    "con cliente esperando pedido",
    "con cliente pagando"
  ];

  public estado:string;
  public codigo:string;

  public entro:boolean = false;
  public entrotabla:boolean = false;

  constructor(public miServ:LogeoService) { }

  ngOnInit() 
  {
    this.miServ.traerMesas().subscribe(res=>
      {
        this.mesas = res;

      });

  }


  //muestra o oculta el formulario para cargar una mesa
  MostraragregarMesa()
  {

    let divAgrega = document.getElementById("divAgregarMesa");

    if(this.entro == false)
    {
      divAgrega.style.display = "block";
      this.entro = true;
    }
    else
    {
      divAgrega.style.display = "none";
      this.entro = false;
    }
  }



  //agrega una mesa a la api si es admin, sino no
  agregarMesa()
  {
    let token = localStorage.getItem("token");
    console.log(token);
    try
    {
      this.miServ.agregarMesa(this.estado,this.codigo,token).subscribe(res=>
        {
          this.respuesta = res;
          alert(this.respuesta);

          //con esto intento que se actualize en tiempo real la mesa nueva agregada
          this.miServ.traerMesas().subscribe(res=>
            {
              this.mesas = res;
        
            });
        },
        err =>
        {
          alert(err.error.respuesta);
        })


    }
    catch(e)
    {
      console.log(e);
    }
    
  }
  public mesaAModificar;
  //evento que se genera cuando se clickea "modificar" de alguna mesa
  //recibe el id de dicha mesa
  modificarMesa()
  {
    let token = localStorage.getItem("token");
    this.miServ.modificarMesa(this.estado,this.mesaAModificar,token).subscribe(res=>
      {
        console.log(res);
        this.ngOnInit()
      })
    
  }

  mostrarDiv(codigoMesa:any)
  {
    this.mesaAModificar = codigoMesa
    let div = document.getElementById("div");
    div.style.display = "block";
  }

  botonDepende()
  {
    let botonModificar = document.getElementsByClassName("btnModificar") as HTMLCollectionOf<HTMLInputElement>;;
    let tipo = localStorage.getItem("tipo");

    if(tipo == "socio" || tipo == "cocinero")
    {
      for(let i=0;i<botonModificar.length;i++)
      {
        //botonModificar[i] as HTMLInputElement
        botonModificar[i].disabled = false;
      }
      
    }
  }

  //muestra la tabla de las mesas cargadas
  MostrarMesas()
  {
    let tabla = document.getElementById("tabla");

    if(this.entrotabla == false)
    {
      tabla.style.display = "block";
      this.entrotabla = true;
      this.botonDepende();

    }
    else
    {
      tabla.style.display = "none";
      this.entrotabla = false;
    }
  }


}
