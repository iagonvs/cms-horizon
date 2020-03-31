import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Nota } from './nota';


@Injectable({
  providedIn: 'root'
})
export class NotaService {
  public notas: Nota[] = [];
  // Dando um GET na rota Route::get('/nota/notafinal', 'NotaController@notafinal'); e trazendo os dados
  constructor(private http: HttpClient) {
     this.http.get('/api/nota/notafinal').subscribe(
    (notas: any[]) => {
      for(let n of notas){
        this.notas.push(
          new Nota(n.notaParcial1, n.notaParcial2, n.notaParcial3, n.Onda, n.total, n.Bateria, n.Surfista)
          );
      }
    }
  ); 

}

//Dando um POST na rota Route::post('/nota/store', 'NotaController@store');
salvar(nota: Nota){
  const uploadData = new FormData();
  uploadData.append('notaParcial1', nota.notaParcial1);
  uploadData.append('notaParcial2', nota.notaParcial2);
  uploadData.append('notaParcial3', nota.notaParcial3);
  uploadData.append('Onda', nota.Onda);
  this.http.post('/api/nota/store', uploadData).subscribe((event: any) => {
    if (event.type == HttpEventType.Response){
      console.log(event);
    }
  })
}
}
