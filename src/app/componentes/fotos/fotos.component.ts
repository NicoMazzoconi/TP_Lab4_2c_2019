import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  public foto:any;

  constructor() {
    
   }

  ngOnInit() {
    this.foto = localStorage.getItem('foto');
  }


}
