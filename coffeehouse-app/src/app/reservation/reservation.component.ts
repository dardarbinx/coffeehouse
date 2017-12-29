import {
   Component,
   OnInit,
   ViewChild,
   ViewContainerRef
} from '@angular/core';
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
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
   selector: 'app-reservation',
   templateUrl: './reservation.component.html',
   styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

   private user: firebase.User;

   reservationForm: FormGroup;
   today = new Date();

   constructor(private authService: AuthService,
      private dataService: DataService,
      private fb: FormBuilder,
      public toastr: ToastsManager,
      private vRef: ViewContainerRef) {

      this.toastr.setRootViewContainerRef(vRef);

      this.authService.user$.subscribe(user => {
        this.user = user;
        this.createForm();
      });
   }

   createForm(): void {
      let displayName = '';
      let email = '';
      if (this.user !== null) {
         displayName = this.user.displayName;
         email = this.user.email;
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
      this.createForm();
   }

   submitForm(): void {
      this.dataService.addReservation({
         displayName: this.reservationForm.get('displayName.displayName').value,
         emailAddress: this.reservationForm.get('emailAddress.emailAddress').value,
         guests: this.reservationForm.controls.guests.value,
         date: this.reservationForm.controls.date.value.getDate(),
         comments: this.reservationForm.controls.comments.value
      }).then((response) => {
         this.toastr.success('Successfully saved reservation!');
         this.clearForm();
      }, (error) => {
         this.toastr.error('Oh snap! Something went wrong!');
      });
   }
}
