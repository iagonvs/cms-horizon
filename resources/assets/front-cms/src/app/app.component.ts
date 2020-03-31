import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {SurfistaDialogComponent} from './surfista-dialog/surfista-dialog.component';
import { BateriaDialogComponent } from './bateria-dialog/bateria-dialog.component';
import { Surfista } from './surfista';
import { SurfistaService } from './surfista.service';
import { BateriaService } from './bateria.service';
import { Bateria } from './bateria';
import { OndaDialogComponent } from './onda-dialog/onda-dialog.component';
import { OndaService } from './onda.service';
import { Onda } from './onda';
import { NotaDialogComponent } from './nota-dialog/nota-dialog.component';
import { NotaService } from './nota.service';
import { Nota } from './nota';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adicionando Surfista';
  @Input() surfista: Surfista;
  public surfistas: Surfista[];
  public baterias: Bateria[];
  public ondas: Onda[];
  public notas: Nota[];
constructor(
  public dialog: MatDialog,
  public surfistaService: SurfistaService,
  public bateriaService: BateriaService,
  public ondaService: OndaService,
  public notaService: NotaService){}
ngOnInit(){
  this.surfistas = this.surfistaService.surfistas;
  this.baterias = this.bateriaService.baterias;
  this.ondas = this.ondaService.ondas;
  this.notas = this.notaService.notas;
}

  openDialog(){
    const dialogRef = this.dialog.open(SurfistaDialogComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result){
          this.surfistaService.salvar(result.surfista);
        }
      }
    );
  }

  openDialog2(){
    const dialogRef = this.dialog.open(BateriaDialogComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result){
          this.bateriaService.salvar(result.bateria);
        }
      }
    );
  }

  openDialog3(){
    const dialogRef = this.dialog.open(OndaDialogComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result){
          this.ondaService.salvar(result.onda);
        }
      }
    );
  }
  openDialog4(){
    const dialogRef = this.dialog.open(NotaDialogComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result){
          this.notaService.salvar(result.nota);
        }
      }
    );
  }
}
