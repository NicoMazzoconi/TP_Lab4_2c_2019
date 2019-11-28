import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public logsLogin:any;
  public operaciones:any;
  public paraGrafico:any;
  public idRecibido:any;
  public logDePersona:any;
  public idVer: boolean = false;
  public graficoVer: boolean = false;
  public operacionesVer: boolean = false;
  public loginsVer: boolean = false;
  
  constructor(public logserv:LogeoService) { }

  ngOnInit() {
    let token = localStorage.getItem("token");
    this.logserv.traerLogsLogin(token).subscribe(res=>
      {
        this.logsLogin = res;
        console.log(res);
      });

    this.logserv.traerLogsxSectorLista(token).subscribe(res=>
      {
        this.operaciones = res;
        console.log(res);
      });

    
  }


  logXId()
  {
    let token = localStorage.getItem("token");

    if(this.idRecibido != null)
    {
      this.logserv.traerLogsxPersona(token,this.idRecibido).subscribe(res=>{
        this.logDePersona = res;
        console.log(this.logDePersona);
      })
    }
   
  }

  verId(idVer){
    this.idVer = !idVer;
  }

  verGrafico(graficoVer){
    this.graficoVer = !graficoVer;
  }

  verOperaciones(operacionesVer){
    this.operacionesVer = !operacionesVer;
  }

  verLogins(loginsVer){
    this.loginsVer = !loginsVer;
  }
}
