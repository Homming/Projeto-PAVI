import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Eletronico} from './eletronico/eletronico.model'

import {ELE_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import { MenuItem } from "app/eletronico-detail/menu-item/menu-item.model";

@Injectable()
export class EletronicosService {



  constructor (private http: Http){

  }

  eletronicos(): Observable<Eletronico[]> {
    return this.http.get(`${ELE_API}/eletronicos`).map(response => response.json()).catch(ErrorHandler.handleError)
  }

  eletronicoById(id: string): Observable<Eletronico>{
      return this.http.get(`${ELE_API}/eletronicos/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)
  }

  reviewsOfEletronico(id: string): Observable<any>{
    return this.http.get(`${ELE_API}/eletronicos/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError)
  }

  menuOfEletronico(id: string): Observable<MenuItem[]>{
    return this.http.get(`${ELE_API}/eletronicos/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError)
  }

}
