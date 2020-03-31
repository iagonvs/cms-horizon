import { Component, OnInit, Input } from '@angular/core';
import { Surfista } from '../surfista';
import { MatDialog } from '@angular/material/dialog';
import { SurfistaService } from '../surfista.service';
import { Bateria } from '../bateria';
import { BateriaService } from '../bateria.service';
import { Onda } from '../onda';
import { OndaService } from '../onda.service';

@Component({
  selector: 'app-onda',
  templateUrl: './onda.component.html',
  styleUrls: ['./onda.component.css']
})
export class OndaComponent implements OnInit {
  @Input() onda: Onda;
  public baterias: Bateria[];
  public surfistas: Surfista[];
  public ondas: Onda[];
  constructor(public dialog: MatDialog, public surfistaService: SurfistaService,
    public bateriaService: BateriaService, public ondaService: OndaService) { }

    ngOnInit(){
      this.surfistas = this.surfistaService.surfistas;
      this.baterias = this.bateriaService.baterias;
      this.ondas = this.ondaService.ondas;
    }
}
