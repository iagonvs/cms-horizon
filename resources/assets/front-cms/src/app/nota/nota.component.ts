import { Component, OnInit, Input } from '@angular/core';
import { Nota } from '../nota';
import { Onda } from '../onda';
import { NotaService } from '../nota.service';
import { OndaService } from '../onda.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() nota: Nota;
  public notas: Nota[];
  public ondas: Onda[];
  
  constructor(public dialog: MatDialog,
     public notaService: NotaService,
     public ondaService: OndaService) { }

     ngOnInit(){
      this.notas = this.notaService.notas;
      this.ondas = this.ondaService.ondas;
    }


}
