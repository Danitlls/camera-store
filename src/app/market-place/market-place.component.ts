import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css'],
  providers: [ProductService]
})
export class MarketPlaceComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // console.log(this.router.url);
  }

  goToDetailPage(clickedProduct) {
   this.router.navigate(['products', clickedProduct.$key]);
 };

}
