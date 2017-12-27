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
   Validators,
   FormBuilder
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
   @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

   reservationForm: FormGroup;
   displayName = '';
   emailAddress = '';
   date = new Date();
   guests = 4;

   constructor(private authService: AuthService,
      private fb: FormBuilder) {
      this.authService.user$.subscribe(user => {
         this.setValues(user);
      });
   }

   ngOnInit(): void {
      this.createForm();
   }

   createForm(): void {
      this.reservationForm = this.fb.group({
         // Use nested form groups to be able to use validated-input.component
         emailAddress: this.fb.group({
            emailAddress: new FormControl('', [
               Validators.required,
               patternValidator(
                  // tslint:disable-next-line
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               )
            ])
         }),
         displayName: this.fb.group({
            displayName: new FormControl('',
               Validators.required)
         }),
         // Validation not needed
         guests: new FormControl(4),
         date: new FormControl(new Date()),
         comments: new FormControl('')
      })
   }

   setValues(user: firebase.User): void {
      if (user !== null) {
         this.displayName = user.displayName;
         this.emailAddress = user.email;
      } else {
         this.displayName = '';
         this.emailAddress = '';
      }
      this.guests = 4;
      this.date = new Date();
   }

   clearForm() {
      this.reservationForm.reset();
      this.reservationForm.controls.guests.setValue(4);
      this.reservationForm.controls.date.setValue(new Date());
   }
}
