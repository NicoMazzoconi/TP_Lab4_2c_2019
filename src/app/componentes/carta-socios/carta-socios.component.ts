import { Component, OnInit } from '@angular/core';
import { CartaService } from 'src/app/servicios/carta.service';

@Component({
  selector: 'app-carta-socios',
  templateUrl: './carta-socios.component.html',
  styleUrls: ['./carta-socios.component.scss']
})
export class CartaSociosComponent implements OnInit {

  public laCarta;

  constructor(public carServ:CartaService) { }

  ngOnInit() {
    this.laCarta = this.carServ.traerCarta();

  }
  modificarCarta(id)
  {
    console.log(id);
  }

  borrarCarta(id)
  {
    console.log(id);
    this.carServ.borrar(id);
  }
}
