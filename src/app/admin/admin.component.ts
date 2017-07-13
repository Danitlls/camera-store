import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, price: number, description: string, image: string, amount: number) {
   var newProduct: Product = new Product(name, price, description, image, amount);
   console.log(newProduct);
 }

}
