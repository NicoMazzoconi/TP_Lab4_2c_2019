import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent implements OnInit {

  tipo;
  constructor(public router:Router) { 
    this.tipo = localStorage.getItem('tipo');
  }

  ngOnInit() {
  }

 
}
