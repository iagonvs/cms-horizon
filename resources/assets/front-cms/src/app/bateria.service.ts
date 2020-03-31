import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Bateria } from './bateria';


@Injectable({
  providedIn: 'root'
})
export class BateriaService {

  public baterias: Bateria[] = [];

  constructor(private http: HttpClient) {
    this.http.get('/api/bateria/').subscribe(
      (baterias: any[]) => {
        for(let b of baterias){
          this.baterias.push(
            new Bateria(b.id ,b.Surfista1, b.Surfista2, b.s1, b.s2)
            );
        }
      }
    );
   }

   salvar(bateria: Bateria){
    const uploadData = new FormData();
    uploadData.append('Surfista1', bateria.Surfista1);
    uploadData.append('Surfista2', bateria.Surfista2);
    this.http.post('/api/bateria/store', uploadData).subscribe((event: any) => {
      if (event.type == HttpEventType.Response){
        console.log(event);
      }
    })
  }

}
