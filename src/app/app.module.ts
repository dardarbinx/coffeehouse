import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module'

// Components
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

// Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material';

// Google Maps API
import { AgmCoreModule } from '@agm/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

// Services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    BottombarComponent,
    AboutComponent,
    ReservationComponent,
    LocationComponent,
    OpeninghoursComponent,
    LoginComponent
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
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    SharedModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    SharedModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
