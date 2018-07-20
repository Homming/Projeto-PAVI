import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Pedido } from "app/pedidos/pedido/pedido.model";

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PedidoService {
  pedidoList: AngularFireList<any>;
  selectedPedido: Pedido = new Pedido();
  constructor(private firebase: AngularFireDatabase) { }
    
    getPedidos() {
      this.pedidoList = this.firebase.list('pedidos');
      return this.pedidoList;
    }

    insertPedido(pedido: Pedido){
      this.pedidoList.push({
        user: pedido.user,
        item: pedido.item,
        price: pedido.price
      });
    }

    updatePedido(ped: Pedido){
      this.pedidoList.update(ped.$key, {
        user: ped.user,
        item: ped.item,
        price: ped.price
      });
    }

    deletePedido(key: string){
      this.pedidoList.remove(key);
    }

}
