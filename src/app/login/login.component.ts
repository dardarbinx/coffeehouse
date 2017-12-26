import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  signInWithFacebook(): void {
    this.authService.signInWithFacebook()
      .then((result) => {
        $('#loginModal').modal('hide');
      })
      .catch((err) => console.log(err));
  }


}
