import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Jugador } from '../jugadores/jugador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private urlEndPoint = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  guardar(jugador: Jugador): Observable<Jugador>{
    return this.http.post<Jugador>(this.urlEndPoint, jugador, {headers: this.httpHeaders})
  }

  obtenerJugadores(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.urlEndPoint}/resultados`);
  }

}
