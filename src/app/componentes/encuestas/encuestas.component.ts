import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {

  public encuestas = [];
  constructor(public svLog: LogeoService) { }

  ngOnInit() {
    this.svLog.traerEncuesta().subscribe(res => {
      let aux : any = res;
      this.encuestas = aux.respuesta;
    });
  }

}
