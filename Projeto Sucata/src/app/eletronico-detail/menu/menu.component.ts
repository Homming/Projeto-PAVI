import { Component, OnInit } from '@angular/core';
import { MenuCartService} from './menu-cart.service';
import { PedidoService } from "app/pedidos/pedido.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private menuCartService: MenuCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.menuCartService.items;
  }

  clear(){
    this.menuCartService.clear()
  }

  removeItem(item: any){
    this.menuCartService.removeItem(item)
  }

  addItem(item: any){
    this.menuCartService.addItem(item)
  }

  total(): number{
    return this.menuCartService.total()
  }
  /*
  onSubmit(form: NgForm){
    if(form.value.$key == null)
      this.pedidoService.insertPedido(form.value);
    else
      this.pedidoService.updatePedido(form.value);

    this.resetForm(form);
  }

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
  }*/

}
