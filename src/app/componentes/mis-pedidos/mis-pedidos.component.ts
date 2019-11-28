import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {

  public losDatos:any;
  public arrayPedidos:Array<any>;

  constructor() { }

  ngOnInit() {
    this.losDatos = localStorage.getItem("pedidos");
    this.arrayPedidos = JSON.parse(this.losDatos);
    console.log(JSON.parse(this.losDatos)); 
  }

}
