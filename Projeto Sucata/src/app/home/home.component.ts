import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  user = null;

  constructor(private authService: AuthService, private router: Router) {
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

}
