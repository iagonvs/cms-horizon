import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';
import { OndaService } from '../onda.service';
import { Onda } from '../onda';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nota-dialog',
  templateUrl: './nota-dialog.component.html',
  styleUrls: ['./nota-dialog.component.css']
})
export class NotaDialogComponent implements OnInit {
  public dados = {
    nota: new Nota("","","","","","","")
  }

  public ondas: Onda[];
  public notas: Nota[];

  constructor(
    public dialogref: MatDialogRef<NotaDialogComponent>,
    public ondaService: OndaService,
    public notaService: NotaService

  ) { }


  ngOnInit(){
    this.notas = this.notaService.notas;
    this.ondas = this.ondaService.ondas;
  }

  salvar(){
    this.dialogref.close(this.dados);
  }

}
