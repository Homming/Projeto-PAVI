import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  authState: any = null;
  user = null;

  constructor(private authService: AuthService,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase, 
              private router: Router) {

                this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth
                });
  }

    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          this.router.navigate(['eletronicos'])
        })
      .catch((err) => console.log(err));
    }


    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['eletronicos'])
        })
      .catch((err) => console.log(err));
    }

    get authenticated(): boolean {
      return this.authState !== null;
    }

    get currentUser(): any {
      return this.authenticated ? this.authState : null;
    }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }


}
