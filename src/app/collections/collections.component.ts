import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  blocks: {heading: string, imageUrl: string}[] = [
                      {heading: 'Laptop Collection',imageUrl: './assets/img/product01.png'},
                      {heading: 'Accessories Collection',imageUrl: './assets/img/product02.png'},
                      {heading: 'Cameras Collection',imageUrl: './assets/img/product09.png'}
                    ];
  constructor() { }

  ngOnInit(): void {
  }

}
