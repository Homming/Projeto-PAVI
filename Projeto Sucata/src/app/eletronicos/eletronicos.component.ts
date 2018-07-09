import { Component, OnInit } from '@angular/core';
import { Eletronico } from "app/eletronicos/eletronico/eletronico.model";
import { EletronicosService } from "app/eletronicos/eletronicos.service";



@Component({
  selector: 'mt-eletronicos',
  templateUrl: './eletronicos.component.html'
})
export class EletronicosComponent implements OnInit {

  eletronicos: Eletronico[]

  constructor(private eletronicosService: EletronicosService   ) { }

  ngOnInit() {
    this.eletronicos = this.eletronicosService.eletronicos()
  }

}
