import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  lat = 51.25;
  lng = 5.5;

  constructor() { }

  ngOnInit() {
  }

}
