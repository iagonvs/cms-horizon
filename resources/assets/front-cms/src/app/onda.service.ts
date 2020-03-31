import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Onda } from './onda';

@Injectable({
  providedIn: 'root'
})
export class OndaService {
  public ondas: Onda[] = [];
  constructor(private http: HttpClient) {
    this.http.get('/api/onda/').subscribe(
      (ondas: any[]) => {
        for(let o of ondas){
          this.ondas.push(
            new Onda(o.id ,o.Bateria, o.Surfista, o.nome)
            );
        }
      }
    );
   }
   salvar(onda: Onda){
    const uploadData = new FormData();
    uploadData.append('Bateria', onda.Bateria);
    uploadData.append('Surfista', onda.Surfista);
    this.http.post('/api/onda/store', uploadData).subscribe((event: any) => {
      if (event.type == HttpEventType.Response){
        console.log(event);
      }
    })
  }
}
