import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { EletronicoComponent } from './eletronicos/eletronico/eletronico.component';
import { EletronicosService } from './eletronicos/eletronicos.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EletronicosComponent,
    EletronicoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EletronicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
