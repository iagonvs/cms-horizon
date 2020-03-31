import { Component, OnInit, Input } from '@angular/core';
import { Surfista } from '../surfista';
import { SurfistaService } from '../surfista.service';

@Component({
  selector: 'app-surfista',
  templateUrl: './surfista.component.html',
  styleUrls: ['./surfista.component.css']
})
export class SurfistaComponent implements OnInit {

  @Input() surfista: Surfista;
  public surfistas: Surfista[];
  constructor(public surfistaService: SurfistaService,) { }

  ngOnInit(){
    this.surfistas = this.surfistaService.surfistas;
  }
}
