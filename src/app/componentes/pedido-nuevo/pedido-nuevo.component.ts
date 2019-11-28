import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { CartaService } from 'src/app/servicios/carta.service';

import {PickListModule} from 'primeng/picklist';

interface pedido {
  codigoPedido: String;
  codigoMesa: String;
  nombre: String;
  precio: string;
}

@Component({
  selector: 'app-pedido-nuevo',
  templateUrl: './pedido-nuevo.component.html',
  styleUrls: ['./pedido-nuevo.component.scss']
})



export class PedidoNuevoComponent implements OnInit {

  
  constructor(public logServ:LogeoService, public cartServ:CartaService) { }

  list1: any[];
  list2: any[];
  
  public idMesa:string;
  public respuesta:any;

  public mensaje:any;

  ngOnInit() {
    //this.list1 = this.laCarta.laCarta;
    this.list1 = this.cartServ.traerCarta();
    //console.log(this.list1)
    this.list2 = new Array();
    
    //console.log(this.makeid(5));
  }

  mostrar()
  {
    let div = document.getElementById("divFinal");
    if(div.style.display != "block")
    {
      div.style.display = "block";
      this.list1.forEach(element => {
        let chk = document.getElementById(element.id) as HTMLInputElement;
        if(chk.checked)
        this.list2.push(element);
      });
        
    }
    else
    {
      div.style.display = "none";
    }
    
  }

  //esta funcion genera un codigo aleatorio para el pedido
   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 



  terminar()
  {
    //tomo el token para verificar que es socio mozo o cliente
    let token = localStorage.getItem("token");
    let pedidos = this.list2;
    //console.log(pedidos);

    if(pedidos.length == 0)
    {
      alert("No elihio ningun producto");
    }
    else
    {
      //genero codigo de pedido aleatoreo
      
      //lo guardo en localstorage para poder revisarlo mas adelante
      //entre todo lo que se selecciono debo ir realizando pedidos

      let pedidosAGuardar:Array<pedido>
      let pedidoParaGuardarLocal:pedido;
      let codigosPedidos = '';
      pedidosAGuardar = new Array<pedido>();

      pedidos.forEach(pedido => {
        let codigoPedido = this.makeid(5);
        this.logServ.agregarPedido(codigoPedido,this.idMesa,pedido.tipo,pedido.nombre,pedido.precio,token)
        .subscribe(res=>{
          this.respuesta = res;
          codigosPedidos = codigosPedidos + ', ' + codigoPedido;
          this.mensaje = "sus codigos de pedidos es: " + codigosPedidos;
          
          pedidoParaGuardarLocal = {"codigoPedido":codigoPedido,"codigoMesa":this.idMesa,
          "nombre":pedido.nombre,"precio":pedido.precio};

          pedidosAGuardar.push(pedidoParaGuardarLocal);
          localStorage.setItem("pedidos",JSON.stringify(pedidosAGuardar));

        },
        err=>{
          console.log(err);
          alert(err.error.respuesta);
        });
      });
  
    }

   
  }

}
