import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PedidoService } from "app/pedidos/pedido.service";
//import { Pedido } from "app/pedidos/pedido/pedido.model";

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.$key == null)
      this.pedidoService.insertPedido(form.value);
    else
      this.pedidoService.updatePedido(form.value);

    this.resetForm(form);
  }

  //Limpar Campos
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.pedidoService.selectedPedido = {
      $key: null,
      user: '',
      item: '',
      price: 0,
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Tem Certeza ? Ação irreversível.') == true) {
      this.pedidoService.deletePedido(form.value.$key);
      this.resetForm(form);
    }
  }

}
