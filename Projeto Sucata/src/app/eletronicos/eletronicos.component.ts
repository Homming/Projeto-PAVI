import { Component, OnInit } from '@angular/core';
import { Eletronico } from "app/eletronicos/eletronico/eletronico.model";

@Component({
  selector: 'mt-eletronicos',
  templateUrl: './eletronicos.component.html'
})
export class EletronicosComponent implements OnInit {

  eletronicos: Eletronico[] = [
  {
    id: "bat-eria",
    name: "Bateria",
    descricao: "Bateria para solicitação de coleta",
    imagePath: "assets/img/eletronicos/bateria.jpg"
  },
  {
    id: "placa-mae",
    name: "Placa Mãe",
    descricao: "Placa Mãe para solicitação de coleta",
    imagePath: "assets/img/eletronicos/placas.jpg"
  },
  {
    id: "Gabi-nete",
    name: "Gabinete",
    descricao: "Gabinete para solicitação de coleta",
    imagePath: "assets/img/eletronicos/gabinete.jpg"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
