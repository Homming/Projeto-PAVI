import { Component, OnInit } from '@angular/core';
import { MenuCartService} from './menu-cart.service'
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

}
