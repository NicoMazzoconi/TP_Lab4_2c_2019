import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-pedido-ruta',
  templateUrl: './pedido-ruta.component.html',
  styleUrls: ['./pedido-ruta.component.scss']
})
export class PedidoRutaComponent implements OnInit {

  public codigoMesa:string;
  public codigoPedido:string;

  public respuesta:any;


  constructor(public logServ:LogeoService) { }

  ngOnInit() {
  }

  buscarPedido()
  {
    this.logServ.buscarPedido(this.codigoMesa,this.codigoPedido).subscribe(res=>
      {
        this.respuesta = res;
        console.log(this.respuesta);
      },
      err=>
      {
        this.respuesta = err;
        console.log(this.respuesta);
        this.respuesta.respuesta = "usted no esta en esa mesa o su pedido no existe"
      })
  }
}
