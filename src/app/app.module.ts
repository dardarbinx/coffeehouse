import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppBootstrapModule } from './/app-bootstrap.module';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LocationComponent } from './location/location.component';
import { OpeninghoursComponent } from './openinghours/openinghours.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    BottombarComponent,
    AboutComponent,
    ReservationComponent,
    LocationComponent,
    OpeninghoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
