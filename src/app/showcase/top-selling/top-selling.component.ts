import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {
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
