import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-mesa-listado',
  templateUrl: './mesa-listado.component.html',
  styleUrls: ['./mesa-listado.component.scss']
})
export class MesaListadoComponent implements OnInit {
  mesas = [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.traerMesas().then(query => {
      query.forEach(doc => {
        this.mesas.push(doc.data());
      })
    })
  }

}
