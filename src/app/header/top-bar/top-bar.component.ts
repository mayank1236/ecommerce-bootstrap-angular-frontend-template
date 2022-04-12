import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faLocationDot, faDollarSign, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faPhone= faPhone;
  faEnvelope = faEnvelope;
  faLocation = faLocationDot;
  faDollar = faDollarSign;
  faLock = faLock;

  constructor() { }

  ngOnInit(): void {
  }

}
