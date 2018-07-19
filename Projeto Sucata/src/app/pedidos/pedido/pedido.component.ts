import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PedidoService } from "app/pedidos/pedido.service";
import { Pedido } from "app/pedidos/pedido/pedido.model";

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.pedidoService.getPedidos();
    this.resetForm();
  }

  onSubmit(pedidoForm: NgForm){
    if(pedidoForm.value.$key == null)
      this.pedidoService.insertPedido(pedidoForm.value);
    else
      this.pedidoService.updatePedido(pedidoForm.value);

    this.resetForm(pedidoForm);
  }

  //Limpar Campos
  resetForm(pedidoForm?: NgForm){
    if(pedidoForm != null)
      pedidoForm.reset();
      this.pedidoService.selectedPedido = new Pedido();
  }

}
