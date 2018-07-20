import { Component, OnInit } from '@angular/core';

import { PedidoService } from "app/pedidos/pedido.service";

@Component({
  selector: 'mt-pedidos',
  templateUrl: './pedidos.component.html',
  providers :[PedidoService]
})
export class PedidosComponent implements OnInit {

  constructor(private pedidoService : PedidoService) { }

  ngOnInit() {
  }

}
