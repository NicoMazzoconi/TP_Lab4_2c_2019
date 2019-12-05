import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(private cockyServ:CookieService) { }

  ngOnInit() {
    this.verificarMostrarCockies();
    
  }

  aceptar_cookies()
  {

    this.cockyServ.set("chekeadoCartelCoockies","si");
  }

  verificarMostrarCockies()
  {
    let respuesta = this.cockyServ.get("chekeadoCartelCoockies");
  }
}
