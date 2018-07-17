import { CartItem } from "app/eletronico-detail/menu/cart-item.model";
import { MenuItem } from "app/eletronico-detail/menu-item/menu-item.model";

export class MenuCartService {
  items: CartItem[] = []

  clear(){
    this.items = []
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
