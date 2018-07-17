import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EletronicosService} from '../../eletronicos/eletronicos.service'
import {Observable} from 'rxjs/Observable'
import { MenuItem } from "app/eletronico-detail/menu-item/menu-item.model";
@Component({
  selector: 'mt-tipo',
  templateUrl: './tipo.component.html'
})
export class TipoComponent implements OnInit {

  menu: Observable<MenuItem[]>
  constructor(private eletronicosService: EletronicosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.eletronicosService.menuOfEletronico(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
