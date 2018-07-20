import { Component, OnInit } from '@angular/core';

import { PedidoService } from "app/pedidos/pedido.service";
import { Pedido } from "app/pedidos/pedido/pedido.model";

@Component({
  selector: 'mt-pedido-list',
  templateUrl: './pedido-list.component.html'
})
export class PedidoListComponent implements OnInit {
  pedidolist: Pedido[];
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    var x = this.pedidoService.getPedidos();
    x.snapshotChanges().subscribe(item => {
      this.pedidolist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.pedidolist.push(y as Pedido);
      });
    });

  }

  onItemClick(ped : Pedido){
    this.pedidoService.selectedPedido = Object.assign({},ped);
  }

  onDelete(ped: Pedido) {
    if (confirm('Tem Certeza ? Ação irreversível.') == true) {
      this.pedidoService.deletePedido(ped.$key);
    }
  }
}
