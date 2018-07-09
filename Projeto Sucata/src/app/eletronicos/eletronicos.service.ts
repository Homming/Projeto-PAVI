import {Eletronico} from './eletronico/eletronico.model'

export class EletronicosService {

  eletro: Eletronico[] = [
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

  constructor (){

  }

  eletronicos(): Eletronico[] {
    return this.eletro;
  }

}
