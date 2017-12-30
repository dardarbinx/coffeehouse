import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

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

// Google Maps API
import { AgmCoreModule } from '@agm/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

// Services
import { AuthService } from './_services/auth.service';

// Guards
import { AuthGuard } from './_guards/auth.guard';
import { DataService } from './_services/data.service';

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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDSsSaC6fWYl6usbSehP5KWwUhMm7Pq84'
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    SharedModule,
    ToastModule.forRoot(),
  ],
  exports: [
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
