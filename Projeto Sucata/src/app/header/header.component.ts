import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//auth
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  ngOnInit() {
  }

}
