import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {

  public losDatos:any;
  public arrayPedidos:Array<any>;
  public puntacionMesa;
  public codigoMesa;
  public puntuacionRestaurante;
  public puntuacionMozo;
  public puntuacionCocinero;
  public comentario;
  public idPedido;
  constructor(public logServ:LogeoService) { }

  ngOnInit() {
    this.arrayPedidos = [];
    let token = localStorage.getItem("token");
    this.logServ.traerPedidos(token).subscribe(res=>{
      let auxPedidos = res.respuesta;
      this.arrayPedidos = auxPedidos;
    },
    err=>
    {
      alert(err.error.respuesta);
    });
  }

  mostrar(pedido){
    this.idPedido = pedido.id;
    let div = document.getElementById('encuesta');
    div.style.display = 'block';
  }
  encuesta(){
    let token = localStorage.getItem("token");
    this.logServ.hacerEncuesta(token,this.puntacionMesa,this.codigoMesa,this.puntuacionRestaurante,this.puntuacionMozo,this.puntuacionCocinero,this.comentario,this.idPedido).subscribe(res=>{
      this.ngOnInit();
      alert(res);
      let div = document.getElementById('encuesta');
      div.style.display = 'none';
    })
  }

}
