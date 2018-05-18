import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-masproduct',
  templateUrl: './masproduct.component.html',
  styleUrls: ['./masproduct.component.css']
})
export class MasproductComponent implements OnInit {
 
  products = [
    {'id':'1', 'descripcion': 'Chocolate', 'Precio': '2550', 'Marca':'Sol', presentacion: '500gr', 'Categoria':'Alimentos' },
    {'id':'2', 'descripcion': 'Salchichas', 'Precio': '5400', 'Marca':'Rica', presentacion: '500gr', 'Categoria':'Carnes Frias' },
    {'id':'3', 'descripcion': 'Queso', 'Precio': '5200', 'Marca':'Alpina', presentacion: '250gr', 'Categoria':'Lacteos' },

  ];

    model:any={};
      addProducts():void{

      }
  deleteProducts():void{

  }
  editProducts():void{

  }
  updateProducts():void{

  }

  onClickMe() {

  }
  constructor() { }

  ngOnInit() {
  }

}
