import { Component, OnInit, Input } from '@angular/core';
import { Surfista } from '../surfista';
import { MatDialog } from '@angular/material/dialog';
import { SurfistaService } from '../surfista.service';
import { Bateria } from '../bateria';
import { BateriaService } from '../bateria.service';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent implements OnInit {
  @Input() bateria: Bateria;
  public baterias: Bateria[];
  public surfistas: Surfista[];
  constructor(public dialog: MatDialog, public surfistaService: SurfistaService,
    public bateriaService: BateriaService) { }

  ngOnInit(){
    this.surfistas = this.surfistaService.surfistas;
    this.baterias = this.bateriaService.baterias;
  }
}
