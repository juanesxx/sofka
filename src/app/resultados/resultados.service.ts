import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../jugadores/juego';
import { Jugador } from '../jugadores/jugador';
import { Resultado } from '../jugadores/resultado';
import { Vehiculo } from '../jugadores/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private urlEndPoint = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  obtenerJugadores(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.urlEndPoint}/resultados`);
  }


  obtenerResultados(): Observable<Resultado[]>{
    return this.http.get<Resultado[]>(`${this.urlEndPoint}/tabla`)
  }
}
