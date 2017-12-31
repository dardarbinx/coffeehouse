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

    this.reservationForm = new FormGroup({
      emailAddress: new FormControl(email, [
        Validators.required,
        emailPatternValidator()
      ]),
      displayName: new FormControl(displayName, [
        Validators.required
      ]),
      date: new FormControl(null, [
        Validators.required,
        dateValidator()
      ]),
      hour: new FormControl(null, [
        Validators.required
      ]),
      guests: new FormControl(null, [
        Validators.required
      ]),
      comments: new FormControl('')
    });
  }

  clearForm() {
    this.createForm();
  }

  submitForm(): void {
    console.log(this.reservationForm);
    this.dataService.addReservation({
      displayName: this.reservationForm.get('displayName').value,
      emailAddress: this.reservationForm.get('emailAddress').value,
      guests: this.reservationForm.get('guests').value,
      date: this.reservationForm.get('date').value,
      time: this.reservationForm.get('hour').value,
      comments: this.reservationForm.get('comments').value
    }).then((response) => {
      this.toastr.success('Successfully saved reservation!');
      this.clearForm();
    }, (error) => {
      this.toastr.error('Oh snap! Something went wrong!');
    });
  }
}
