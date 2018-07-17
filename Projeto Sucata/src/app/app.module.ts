import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EletronicosComponent } from './eletronicos/eletronicos.component';
import { EletronicoComponent } from './eletronicos/eletronico/eletronico.component';
import { EletronicosService } from './eletronicos/eletronicos.service';
import { EletronicoDetailComponent } from './eletronico-detail/eletronico-detail.component';
import { TipoComponent } from './eletronico-detail/tipo/tipo.component';
import { MenuComponent } from './eletronico-detail/menu/menu.component';
import { MenuItemComponent } from './eletronico-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './eletronico-detail/reviews/reviews.component';
import {MenuCartService} from './eletronico-detail/menu/menu-cart.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EletronicosComponent,
    EletronicoComponent,
    EletronicoDetailComponent,
    TipoComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EletronicosService, MenuCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
