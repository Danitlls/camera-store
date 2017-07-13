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

  constructor() { }

  ngOnInit() {
  }

}
