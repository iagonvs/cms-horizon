import { Component, OnInit } from '@angular/core';
import { Bateria } from '../bateria';
import { Surfista } from '../surfista';
import { SurfistaService } from '../surfista.service';
import { BateriaService } from '../bateria.service';
import { Onda } from '../onda';
import { MatDialogRef } from '@angular/material/dialog';
import { OndaService } from '../onda.service';

@Component({
  selector: 'app-onda-dialog',
  templateUrl: './onda-dialog.component.html',
  styleUrls: ['./onda-dialog.component.css']
})
export class OndaDialogComponent implements OnInit {
  public dados = {
    onda: new Onda("","","", "")
  }
  public ondas: Onda[];
  public surfistas: Surfista[];
  public baterias: Bateria[];
  constructor(
    public dialogref: MatDialogRef<OndaDialogComponent>,
    public surfistaService: SurfistaService,
    public bateriaService: BateriaService,
    public ondaService: OndaService

  ) { }

  ngOnInit(){
    this.surfistas = this.surfistaService.surfistas;
    this.baterias = this.bateriaService.baterias;
    this.ondas = this.ondaService.ondas;
  }

  salvar(){
    this.dialogref.close(this.dados);
  }

}
