import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ReservationComponent } from '../reservation.component';
import { AuthService } from '../../_services/auth.service';
import { DataService } from '../../_services/data.service';
import { FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-reservation-mini',
  templateUrl: './reservation-mini.component.html',
  styleUrls: [
    '../../../sass/forms.scss',
    '../reservation.component.scss',
    './reservation-mini.component.scss'
  ]
})
export class ReservationMiniComponent extends ReservationComponent {

  constructor(protected authService: AuthService,
    protected dataService: DataService,
    public toastr: ToastsManager,
    protected vRef: ViewContainerRef) {
    super(authService, dataService, toastr, vRef);
  }

  nextStep(): void {

  }
}
