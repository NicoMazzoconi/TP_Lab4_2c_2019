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

  public pedidos:any;
  public quePidio:any;

  public pedidoAModificar:any;
  public tiempoEstimado:any;
  public estado:any;


  constructor(public logServ:LogeoService, public router:Router) { }

  list1: any[];
  list2: any[];
  
  ngOnInit() {
      let token = localStorage.getItem("token");
      this.logServ.traerPedidos(token).subscribe(res=>
        {
          //console.log(res);
          this.pedidos = res.respuesta;
          this.quePidio = res.respuesta[0].quePidio;
          //this.quePidio = JSON.stringify(this.quePidio);
          console.log(this.quePidio);
        },
        err=>
        {
          console.log(err);
          alert(err.error.respuesta);
          this.router.navigate(['home/ppal']);
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
    let div = document.getElementById("divModifica");
    div.style.display = "block";
  }
  modificarpedido()
  {
    let token = localStorage.getItem("token");

    let pedido = this.pedidoAModificar;

    
    let estado =  this.estado + "";
     //console.log(estado);

    //console.log(pedido);
    this.logServ.modificarPedidoSinCambios(pedido.codigoPedido,token,estado,this.tiempoEstimado,pedido.tipo)
    .subscribe(res=>{
      alert(res.respuesta);
      this.ngOnInit();
    });
  }
}
