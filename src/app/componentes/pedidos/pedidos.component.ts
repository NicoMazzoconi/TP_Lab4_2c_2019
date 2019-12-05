import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public pedidos = [];

  public pedidoAModificar:any;
  public tiempoEstimado:any;
  public estado:any;


  constructor(public logServ:LogeoService, public router:Router) { }

  list1: any[];
  list2: any[];
  
  ngOnInit() {
      this.pedidos = [];
      let token = localStorage.getItem("token");
      this.logServ.traerPedidos(token).subscribe(res=>
        {
          let auxPedidos = res.respuesta;
          auxPedidos.forEach(element => {
            if(localStorage.getItem('tipo') == 'socio')
            {
              this.pedidos = auxPedidos;
            }
            else {
              if(localStorage.getItem('tipo') == 'mozo' && (element.estado == 'listo para servir' || element.estado == 'entregado'))
              {
                this.pedidos.push(element);
              }
              if(localStorage.getItem('tipo') == 'cocinero' && (element.tipo == 'cocina' || element.tipo == 'postre') && (element.estado == 'pendiente' || element.estado == 'en preparacion'))
              {
                this.pedidos.push(element);
              }
              if(localStorage.getItem('tipo') == 'bartender' && element.tipo == 'bar' && (element.estado == 'pendiente' || element.estado == 'en preparacion'))
              {
                this.pedidos.push(element);
              }
              if(localStorage.getItem('tipo') == 'cervecero' && element.tipo == 'cerveza' && (element.estado == 'pendiente' || element.estado == 'en preparacion'))
              {
                this.pedidos.push(element);
              }
            }
          });
        },
        err=>
        {
          alert(err.error.respuesta);
        })
  }

  //
  //hacer lector qr para poder ver las mesas disponibles............
  //
  //hacer lector qr de la mesa para mostrar el codigo de la mesa
  //

  abrirDiv(pedido:any)
  {
    this.pedidoAModificar = pedido;
    if(pedido.estado == 'pendiente')
    {
      let div = document.getElementById("divModifica");
      div.style.display = "block";
    }else
    {
      this.tiempoEstimado = 0;
      this.modificarpedido();
    }
  }
  modificarpedido()
  {
    let token = localStorage.getItem("token");

    let pedido = this.pedidoAModificar;

    let estadoNuevo;
    switch(pedido.estado)
    {
      case "pendiente":
        estadoNuevo='en preparacion';
      break;
      case "en preparacion":
        estadoNuevo='listo para servir';
      break;
      case "listo para servir":
        estadoNuevo='entregado';
      break;
      case "entregado":
        estadoNuevo='finalizado';
      break;
      case "finalizado":
        estadoNuevo='listo';
      break;
    }

    if(estadoNuevo == 'listo')
    {
      alert("Ese pedido no se puede modificar")
    }
    else{
      
      this.logServ.modificarPedidoSinCambios(pedido.codigoPedido,token,estadoNuevo,this.tiempoEstimado,pedido.tipo)
      .subscribe(res=>{
        alert(res.respuesta);
        let div = document.getElementById("divModifica");
        div.style.display = "none";
        this.ngOnInit();
      });
    }
  }
}
