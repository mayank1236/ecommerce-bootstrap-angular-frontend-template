import { Component, OnInit } from '@angular/core';
import { faEye, faHeart, faRightLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  faHeart = faHeart;
  faEye = faEye;
  faExchange = faRightLeft;

  products: string[] = [
    './assets/img/product01.png',
    './assets/img/product02.png',
    './assets/img/product05.png',
    './assets/img/product06.png',
  ] ;

  leaving: number = NaN;

  hovering: number = NaN;
  constructor() { }

  ngOnInit(): void {
  }

  onHover(index: number) {
    this.hovering = index;

  }

}
