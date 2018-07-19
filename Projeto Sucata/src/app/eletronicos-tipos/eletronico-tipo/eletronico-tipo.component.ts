import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tipo } from "app/database/model/tipo-eletronico";
import { EletronicosService } from "app/database/services/eletronicos.service";

@Component({
  selector: 'mt-eletronico-tipo',
  templateUrl: './eletronico-tipo.component.html'
})
export class EletronicoTipoComponent implements OnInit {

  constructor(
    private eletronicosService: EletronicosService,
  ) { }

  ngOnInit() {
    this.eletronicosService.getTipos();
    this.resetForm();
  }

  onSubmit(eletronicoForm: NgForm){
    if(eletronicoForm.value.$key == null)
      this.eletronicosService.insertTipo(eletronicoForm.value);
    else
      this.eletronicosService.updateTipo(eletronicoForm.value);

    this.resetForm(eletronicoForm);
  }

  //Limpar Campos
  resetForm(eletronicoForm?: NgForm){
    if(eletronicoForm != null)
      eletronicoForm.reset();
      this.eletronicosService.selectedTipo = new Tipo();
  }

}
