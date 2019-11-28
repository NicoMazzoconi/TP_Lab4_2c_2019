import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafico-logs',
  templateUrl: './grafico-logs.component.html',
  styleUrls: ['./grafico-logs.component.scss']
})
export class GraficoLogsComponent implements OnInit {

  public paraGrafico:any;

  public barChartOptions: any = {
    responsive: true,
    scaleSownVerticalLines:false
  } ;

  public barChartLabels: string[] = ['Mozos', 'Clientes', 'Cerveceros', 'Bartenders', 'Cocineros'];

  public barChartType: string = 'bar';
  public barChartLegend = true;

  public barChartData:ChartDataSets[];
 


  constructor(public logserv:LogeoService) { }

  ngOnInit() {
    let mozos;
    let Bartender;
    let Cervezero;
    let Cliente;
    let Cocinero;
    let token = localStorage.getItem("token");
    this.logserv.traerLogsxSector(token).subscribe(res=>
      {
        this.paraGrafico = res;
        console.log(this.paraGrafico);
      
        mozos = this.paraGrafico.Mozos;
        Cliente = this.paraGrafico.Cliente;
        Cervezero = this.paraGrafico.Cerveceros;
        Bartender = this.paraGrafico.Bartender;
        Cocinero = this.paraGrafico.Cocineros;
      
        console.log(mozos, Cliente, Cervezero, Bartender, Cocinero)

        this.barChartData = [{data:[mozos,Cliente,Cervezero,Bartender,Cocinero], label:"Acciones",backgroundColor: ['#d13537', '#b0o0b5', '#coffee'] }]

      })

  }

}
