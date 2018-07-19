import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';

import { PedidoService } from "app/pedidos/pedido.service";
import { Pedido } from "app/pedidos/pedido/pedido.model";

@Component({
  selector: 'mt-pedido-list',
  templateUrl: './pedido-list.component.html'
})
export class PedidoListComponent implements OnInit {
  pedidoList: Pedido[];

  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    return this.pedidoService.getPedidos().snapshotChanges().subscribe(item => {
      this.pedidoList = [];

      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.pedidoList.push(x as Pedido);
      });
    });
  }

  onEdit(pedido: Pedido) {
    this.pedidoService.selectedPedido = Object.assign({}, pedido);
  }

  onDelete($key: string) {
    if(confirm('Você tem certeza que deseja deletar ?')) {
      this.pedidoService.deletePedido($key);
    }
  }
}
