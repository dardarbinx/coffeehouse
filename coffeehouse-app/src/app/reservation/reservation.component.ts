import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
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
import { AuthService } from '../_services/auth.service';
import * as moment from 'moment';
import { dateValidator } from '../_shared/validators/date-validator';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: [
    '../../sass/forms.scss',
    './reservation.component.scss'
  ]
})
export class ReservationComponent {

  private user: firebase.User;

  reservationForm: FormGroup;
  today = moment().format('LLLL');

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
      requester: this.fb.group({
        emailAddress: new FormControl(email, [
          Validators.required,
          emailPatternValidator()
        ]),
        displayName: new FormControl(displayName,
          Validators.required)
      }),
      time: this.fb.group({
        date: new FormControl(moment().format('YYYY-MM-DD'), [
          Validators.required,
          dateValidator()
        ]),
        hour: new FormControl(moment().format('HH:mm'))
      }),
      // Validation messages not needed
      guests: new FormControl(4),
      comments: new FormControl('')
    });
  }

  clearForm() {
    this.createForm();
  }

  submitForm(): void {
    this.dataService.addReservation({
      displayName: this.reservationForm.get('requester.displayName').value,
      emailAddress: this.reservationForm.get('requester.emailAddress').value,
      guests: this.reservationForm.controls.guests.value,
      date: this.reservationForm.get('time.date').value,
      comments: this.reservationForm.controls.comments.value
    }).then((response) => {
      this.toastr.success('Successfully saved reservation!');
      this.clearForm();
    }, (error) => {
      this.toastr.error('Oh snap! Something went wrong!');
    });
  }
}
