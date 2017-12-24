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
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

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
    MatNativeDateModule,
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDSsSaC6fWYl6usbSehP5KWwUhMm7Pq84'
    })
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
