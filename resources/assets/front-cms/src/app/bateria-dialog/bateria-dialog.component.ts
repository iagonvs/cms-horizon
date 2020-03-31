import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Bateria } from '../bateria';
import { Surfista } from '../surfista';
import { SurfistaService } from '../surfista.service';

@Component({
  selector: 'app-bateria-dialog',
  templateUrl: './bateria-dialog.component.html',
  styleUrls: ['./bateria-dialog.component.css']
})
export class BateriaDialogComponent implements OnInit {
  
  public dados = {
    bateria: new Bateria("","","", "", "")
  }

  public surfistas: Surfista[];
  constructor(
    public dialogref: MatDialogRef<BateriaDialogComponent>,
    public surfistaService: SurfistaService
    

  ) { }
  ngOnInit(){
    this.surfistas = this.surfistaService.surfistas;
  }

  salvar(){
    this.dialogref.close(this.dados);
  }


}
