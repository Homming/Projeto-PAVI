import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {EletronicosComponent} from './eletronicos/eletronicos.component'
import {AboutComponent} from './about/about.component'


export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'eletronicos', component: EletronicosComponent},
  {path:'about', component: AboutComponent}
]
