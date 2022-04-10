import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  products: string[] = [
    './assets/img/product01.png',
    './assets/img/product02.png',
    './assets/img/product05.png',
    './assets/img/product06.png',
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
