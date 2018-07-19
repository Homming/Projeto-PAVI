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
    
    getPedidos(){
      return this.pedidoList = this.firebase.list('pedidos');
    }

    insertPedido(pedido: Pedido){
      this.pedidoList.push({
        name: pedido.user,
        item: pedido.item,
        price: pedido.price
      });
    }

    updatePedido(pedido: Pedido){
      this.pedidoList.update(pedido.$key, {
        name: pedido.user,
        item: pedido.item,
        price: pedido.price
      });
    }

    deletePedido($key: string){
      this.pedidoList.remove($key);
    }

}
