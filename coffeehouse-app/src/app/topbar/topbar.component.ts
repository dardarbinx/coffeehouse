import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  loggedIn = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.loggedIn$.subscribe((value) => {
      this.loggedIn = value;
    });
  }

  onDashboard(): boolean {
    return this.router.url === '/dashboard';
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    this.authService.logout()
      .then(() => {
        console.log('Logged out user.');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
