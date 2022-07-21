import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product> = [
    {
      id: 1,
      description: 'iPhone 11',
      price: 3500
    },
    {
      id: 2,
      description: 'iPhone 12',
      price: 4000
    },
    {
      id: 3,
      description: 'iPhone 13',
      price: 5000
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
