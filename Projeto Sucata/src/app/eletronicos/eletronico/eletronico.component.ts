import { Component, OnInit, Input } from '@angular/core';
import { Eletronico } from "app/eletronicos/eletronico/eletronico.model";

@Component({
  selector: 'mt-eletronico',
  templateUrl: './eletronico.component.html'
})
export class EletronicoComponent implements OnInit {

  @Input() eletronico: Eletronico
  constructor() { }

  ngOnInit() {
  }

}
