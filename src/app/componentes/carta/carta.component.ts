import { Component, OnInit } from '@angular/core';
import { CartaService } from 'src/app/servicios/carta.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  //id-nombre-descripcion-precio-foto
  public laCarta;

  constructor(public carServ:CartaService) { }

  ngOnInit() {
    this.laCarta = this.carServ.traerCarta();

  }

  modificarcarta(id)
  {
    
  }
}
