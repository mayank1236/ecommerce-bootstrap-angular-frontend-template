import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  faPhone= faPhone;
  faEnvelope = faEnvelope;
  faLocation = faLocationDot;

  constructor() { }

  ngOnInit(): void {
  }

}
