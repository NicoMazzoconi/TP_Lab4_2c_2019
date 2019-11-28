import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  public laCarta = [
    {
      "id": 1,
      "nombre": "Pizza comun",
      "descripcion": "Queso tomate",
      "precio": "460",
      "foto": "./assets/comida.jpg",
      'tipo': 'cocina'
      
    },
    {
      "id": 2,
      "nombre": "Pizza especial",
      "descripcion": "Tomate y jamon",
      "precio": "490",
      "foto": "./assets/comida.jpg",
      'tipo': 'cocina'
      
    },
    {
      "id": 3,
      "nombre": "Pinta Roja",
      "descripcion": "Cerveza artesanal",
      "precio": "650",
      "foto": "./assets/comida.jpg",
      'tipo': 'cerveza'
      
    },
    {
      "id": 4,
      "nombre": "Pinta Rubia",
      "descripcion": "Cerveza artesanal",
      "precio": "500",
      "foto": "./assets/comida.jpg",
      'tipo': 'cerveza'
      
    },
    {
      "id": 5,
      "nombre": "Helado de chocolate",
      "descripcion": "Helado cremoso artesanal",
      "precio": "300",
      "foto": "./assets/comida.jpg",
      'tipo': 'postre'
    },
    {
      "id": 6,
      "nombre": "Flan con dulce de lecho",
      "descripcion": "Flan casero",
      "precio": "460",
      "foto": "./assets/comida.jpg",
      'tipo': 'postre'
    },
    {
      "id": 7,
      "nombre": "Fernet con cola",
      "descripcion": "80 - 20 bien petrolero",
      "precio": "300",
      "foto": "./assets/comida.jpg",
      'tipo': 'bar'
    },
    {
      "id": 8,
      "nombre": "Virgancia con sprite",
      "descripcion": "Gancia casero de un gran amigo",
      "precio": "460",
      "foto": "./assets/comida.jpg",
      'tipo': 'bar'
    },
  ]


  constructor() { }

  borrar(id)
  {
   
  }


  traerCarta()
  {
    


    return this.laCarta;
  }
}
