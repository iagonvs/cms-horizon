import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Surfista } from '../surfista';

@Component({
  selector: 'app-surfista-dialog',
  templateUrl: './surfista-dialog.component.html',
  styleUrls: ['./surfista-dialog.component.css']
})
export class SurfistaDialogComponent implements OnInit {

  public dados = {
    surfista: new Surfista("", "","")
  }


  constructor(
    public dialogref: MatDialogRef<SurfistaDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    this.dialogref.close(this.dados);
  }

}
