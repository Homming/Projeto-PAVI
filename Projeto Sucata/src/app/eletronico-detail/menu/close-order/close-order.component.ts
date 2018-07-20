import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PedidoService } from "app/pedidos/pedido.service";
@Component({
  selector: 'mt-close-order',
  templateUrl: './close-order.component.html',
  styleUrls: ['./close-order.component.css']
})
export class CloseOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
