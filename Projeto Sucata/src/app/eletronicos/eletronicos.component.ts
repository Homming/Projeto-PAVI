import { Component, OnInit } from '@angular/core';
import { Eletronico } from "app/eletronicos/eletronico/eletronico.model";
import { EletronicosService } from "app/eletronicos/eletronicos.service";
import { AuthService } from '../auth.service';



@Component({
  selector: 'mt-eletronicos',
  templateUrl: './eletronicos.component.html'
})
export class EletronicosComponent implements OnInit {

  eletronicos: Eletronico[]

  constructor(private eletronicosService: EletronicosService, public authService: AuthService  ) { }

  ngOnInit() {
    this.eletronicosService.eletronicos().subscribe(eletronicos => this.eletronicos = eletronicos)
  }

}
