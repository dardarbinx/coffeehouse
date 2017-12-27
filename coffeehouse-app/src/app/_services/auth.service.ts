import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class AuthService {

  public loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loggedIn);
  public user$: BehaviorSubject<firebase.User> = new BehaviorSubject<firebase.User>(this.user);

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private router: Router) {
      _firebaseAuth.authState.subscribe((authState) => {
        if (authState) {
          this.loggedIn$.next(true);
          this.user$.next(_firebaseAuth.auth.currentUser);
        } else {
          this.loggedIn$.next(false);
          this.user$.next(null);
        }
      }
    );
  }

  signInWithFacebook(): Promise<any> {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(() => {
      console.log('Facebook signin succeeded.');
    });
  }

  logout(): Promise<any> {
    return this._firebaseAuth.auth.signOut();
  }

  private get loggedIn(): boolean {
    return this._firebaseAuth.auth.currentUser !== null;
  }

  private get user(): firebase.User {
    return this._firebaseAuth.auth.currentUser;
  }
}
