import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;
  tipo: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  registro(){
    console.log(this.email);
    this.authService.register(this.email, this.password, this.tipo).then(res => this.router.navigate(['/Principal'])).catch(err => console.log(err));
  }

}
