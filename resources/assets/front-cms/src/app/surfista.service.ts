import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Surfista } from './surfista';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SurfistaService {

  public surfistas: Surfista[] = [];

  constructor(private http: HttpClient) {
    this.http.get('/api/').subscribe(
      (surfistas: any[]) => {
        for(let s of surfistas){
          this.surfistas.push(
            new Surfista(s.numero, s.nome, s.pais)
            );
        }
      }
    );
   }

   salvar(surfista: Surfista){
     const uploadData = new FormData();
     uploadData.append('nome', surfista.nome);
     uploadData.append('pais', surfista.pais);
     this.http.post('/api', uploadData).subscribe((event: any) => {
       if (event.type == HttpEventType.Response){
         console.log(event);
       }
     })
   }

}
