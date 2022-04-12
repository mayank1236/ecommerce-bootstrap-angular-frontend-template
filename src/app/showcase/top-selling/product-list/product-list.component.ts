import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: string[][] = [
  [
      './assets/img/product07.png',
      './assets/img/product08.png',
      './assets/img/product09.png'
  ],
  [
      './assets/img/product04.png',
      './assets/img/product05.png',
      './assets/img/product06.png'
  ],
  [
      './assets/img/product01.png',
      './assets/img/product02.png',
      './assets/img/product03.png'
  ],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
