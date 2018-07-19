import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { MenuCartService } from './eletronico-detail/menu/menu-cart.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { PedidoListComponent } from './pedidos/pedido-list/pedido-list.component';


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
    ReviewsComponent,
    PedidosComponent,
    PedidoComponent,
    PedidoListComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EletronicosService, MenuCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
