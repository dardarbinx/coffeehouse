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
import { Observable } from 'rxjs/Observable';
import { DataService } from '../_services/data.service';
import { emailPatternValidator } from '../_shared/validators/email-pattern-validator';

@Component({
   selector: 'app-reservation',
   templateUrl: './reservation.component.html',
   styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
   @ViewChild(MatDatepicker) datepicker: MatDatepicker < Date > ;

   reservationForm: FormGroup;
   today = new Date();

   constructor(private authService: AuthService,
      private dataService: DataService,
      private fb: FormBuilder) {

      this.authService.user$.subscribe(user => {
         this.createForm(user);
      });
   }

   createForm(user: firebase.User): void {
      let displayName = '';
      let email = '';
      if (user !== null) {
         displayName = user.displayName;
         email = user.email;
      }

      this.reservationForm = this.fb.group({
         // Use nested form groups to be able to use validated-input.component
         emailAddress: this.fb.group({
            emailAddress: new FormControl(email, [
               Validators.required,
               emailPatternValidator()
            ])
         }),
         displayName: this.fb.group({
            displayName: new FormControl(displayName,
               Validators.required)
         }),
         // Validation messages not needed
         guests: new FormControl(4),
         date: new FormControl(new Date()),
         comments: new FormControl('')
      });
   }

   clearForm() {
      this.reservationForm.reset();
      this.reservationForm.setValue({ 'guests': 4 });
      this.reservationForm.setValue({ 'date': new Date() });
   }

   submitForm(): void {
      this.dataService.addReservation({
         displayName: this.reservationForm.get('displayName.displayName').value,
         emailAddress: this.reservationForm.get('emailAddress.emailAddress').value,
         guests: this.reservationForm.controls.guests.value,
         date: this.reservationForm.controls.date.value,
         comments: this.reservationForm.controls.comments.value
      });
   }
}
