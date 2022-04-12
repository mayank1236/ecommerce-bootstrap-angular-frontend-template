import { Component, OnInit } from '@angular/core';
import { faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  faHeart = faHeart;
  faBasket = faBasketShopping;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
