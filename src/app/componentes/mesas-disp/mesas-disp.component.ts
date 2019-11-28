import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-mesas-disp',
  templateUrl: './mesas-disp.component.html',
  styleUrls: ['./mesas-disp.component.scss']
})
export class MesasDispComponent implements OnInit {

  constructor(public logServ:LogeoService) { }

  public mesas:Array<any>;

  ngOnInit() {
    this.mesas = new Array();

    this.logServ.traerMesas().subscribe(res=>
      {
         
        res.forEach(mesa => {
          if(mesa.estado == "cerrada")
          {
             this.mesas.push(mesa); 
          }
        });

        //console.log(this.mesas);
      })

  }

}
