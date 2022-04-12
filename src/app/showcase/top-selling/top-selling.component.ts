import { Component, OnInit } from '@angular/core';
import { faEye, faHeart, faRightLeft } from '@fortawesome/free-solid-svg-icons';
  

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {
  faHeart = faHeart;
  faEye = faEye;
  faExchange = faRightLeft;

  products: string[] = [
    './assets/img/product03.png',
    './assets/img/product04.png',
    './assets/img/product07.png',
    './assets/img/product08.png',
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
