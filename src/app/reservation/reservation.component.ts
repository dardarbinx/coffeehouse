import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

@ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  constructor() { }

  ngOnInit() {
  }

}
