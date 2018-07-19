import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {EletronicosComponent} from './eletronicos/eletronicos.component'
import {EletronicoDetailComponent} from './eletronico-detail/eletronico-detail.component'
import {AboutComponent} from './about/about.component'
import {TipoComponent} from './eletronico-detail/tipo/tipo.component'
import {ReviewsComponent} from './eletronico-detail/reviews/reviews.component'

import {EletronicosTiposComponent} from './eletronicos-tipos/eletronicos-tipos.component'

export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'eletronicos', component: EletronicosComponent},
  {path:'eletronicos/:id', component: EletronicoDetailComponent,
  children: [
    {path: '', redirectTo: 'tipo', pathMatch: 'full'},
    {path: 'tipo', component: TipoComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]},
  {path:'about', component: AboutComponent}
]
