import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicios/logeo.service';

@Component({
  selector: 'app-cambiar-foto',
  templateUrl: './cambiar-foto.component.html',
  styleUrls: ['./cambiar-foto.component.scss']
})
export class CambiarFotoComponent implements OnInit {

  public foto:any;
  public ultimoSubido:any = null;
  constructor(public serv: LogeoService) {
  }

  ngOnInit() {
    this.foto = localStorage.getItem('foto');
  }

  upload(event)
  { 
    const file = event.target.files[0];
    this.ultimoSubido = file;
    const reader = new FileReader();
    reader.onload = function(event) {
      var img = document.getElementById('img1') as HTMLInputElement;
      var aux:any = event;
      img.src= aux.target.result as string;
    };
    
    reader.readAsDataURL(file);
   
  }

  ver(){
    if(this.ultimoSubido != null){
      this.serv.subirFoto(this.ultimoSubido, localStorage.getItem('idUsuario')).subscribe(res => {
        alert('Foto cargada correctamente');
      }, err => {
        alert("Hubo un problema al cargar la foto");
      });
    }
    else{
      alert("No subiste ningun archivo!");
    }
  }

}
