import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logIn(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/Principal']);
    }).catch(err => alert('Error en los datos'));
  }

  resolved(captchaResponse: string){
    document.getElementById('boton').setAttribute('disable', 'false');
  }

}
