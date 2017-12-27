import {
   Component,
   OnInit,
   ViewChild
} from '@angular/core';
import {
   MatDatepicker
} from '@angular/material';
import {
   AuthService
} from '../_services/auth.service';
import * as firebase from 'firebase';
import {
   FormControl,
   FormGroup,
   Validators
} from '@angular/forms';
import {
   patternValidator
} from '../_shared/validators/pattern-validator';

@Component({
   selector: 'app-reservation',
   templateUrl: './reservation.component.html',
   styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
   @ViewChild(MatDatepicker) datepicker: MatDatepicker < Date > ;

   reservationForm: FormGroup;
   displayName = '';
   emailAddress = '';
   date = new Date();
   guests = 4;

   constructor(private authService: AuthService) {
      this.authService.user$.subscribe(user => {
         this.setValues(user);
      });
   }

   ngOnInit(): void {
      this.createForm();
   }

   createForm(): void {
      this.reservationForm = new FormGroup({
         emailAddress: new FormControl('', [
            Validators.required,
            patternValidator(
               // tslint:disable-next-line
               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
         ]),
         displayName: new FormControl('', Validators.required)
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
