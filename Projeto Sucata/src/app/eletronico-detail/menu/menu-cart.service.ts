import { Injectable } from '@angular/core';
import { CartItem } from "app/eletronico-detail/menu/cart-item.model";
import { MenuItem } from "app/eletronico-detail/menu-item/menu-item.model";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Pedido } from "app/pedidos/pedido/pedido.model";

@Injectable()
export class MenuCartService {
  items: CartItem[] = []
  pedidoList: AngularFireList<any>;

  clear(){
    this.items = []
  }

  constructor(private firebase: AngularFireDatabase) { }

  insertPedido(pedido: Pedido){
    this.pedidoList.push({
      user: 'user',
      item: CartItem,
      price: '5.0'
    });
  }

  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if (foundItem){
      foundItem.quantity = foundItem.quantity + 1
    }else{
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number{
    return this.items.map(item => item.value()).reduce((prev, value)=> prev+value, 0)
  }

}
