import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})

export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submitForm(name: string, price: number, description: string, image: string, amount: number) {
   var newProduct: Product = new Product(name, price, description, image, amount);
   this.productService.addProduct(newProduct);
 }

}
