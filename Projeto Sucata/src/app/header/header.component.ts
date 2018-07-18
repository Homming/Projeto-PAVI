import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';

//auth
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public afAuth: AngularFireAuth) {
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  loginfb() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logoutfb() {
    this.afAuth.auth.signOut();
  }

}
