import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EletronicosService} from '../eletronicos/eletronicos.service'
import {Eletronico} from '../eletronicos/eletronico/eletronico.model'
@Component({
  selector: 'mt-eletronico-detail',
  templateUrl: './eletronico-detail.component.html'
})
export class EletronicoDetailComponent implements OnInit {

  eletronico: Eletronico

  constructor(private eletronicosService: EletronicosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.eletronicosService.eletronicoById(this.route.snapshot.params['id']).subscribe(eletronico => this.eletronico = eletronico)
  }

}
