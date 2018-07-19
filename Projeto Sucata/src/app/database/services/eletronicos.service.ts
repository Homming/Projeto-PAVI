import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// Modelo
import { Tipo } from "app/database/model/tipo-eletronico";

@Injectable()
export class EletronicosService {

  tipoList: AngularFireList<any>;
  selectedTipo: Tipo = new Tipo();

  constructor(private firebase: AngularFireDatabase) { }
    
    getTipos(){
      //return this.tipoList = this.firebase.list('tipos');
    }

    insertTipo(tipo: Tipo){
      this.tipoList.push({
        name: tipo.name,
        category: tipo.category,
        about: tipo.about,
        hours: tipo.hours
      });
    }

    updateTipo(tipo: Tipo){
      this.tipoList.update(tipo.$key, {
        name: tipo.name,
        category: tipo.category,
        about: tipo.about,
        hours: tipo.hours
      });
    }

    deleteTipo($key: string){
      this.tipoList.remove($key);
    }

}
