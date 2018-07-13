import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Eletronico} from './eletronico/eletronico.model'

import {ELE_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class EletronicosService {



  constructor (private http: Http){

  }

  eletronicos(): Observable<Eletronico[]> {
    return this.http.get(`${ELE_API}/eletronicos`).map(response => response.json()).catch(ErrorHandler.handleError)
  }

}
