import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { AuthService } from '../_services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

@ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  displayName = '';
  emailAddress = '';

  constructor(
    private authService: AuthService
  ) {
    this.authService.user$.subscribe((user) => {
      this.setValues(user);
    });
  }

  setValues(user: firebase.User): void {
    if (user !== null) {
      this.displayName = user.displayName;
      this.emailAddress = user.email;
    } else {
      this.displayName = '';
      this.emailAddress = '';
    }
  }
}
