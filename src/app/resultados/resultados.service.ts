import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../jugadores/juego';
import { Jugador } from '../jugadores/jugador';
import { Vehiculo } from '../jugadores/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private urlEndPoint = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  obtenerVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.urlEndPoint}`);
  }

  obtenerJugadores(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`${this.urlEndPoint}/resultados`);
  }


  vecesGanadas(id: number, puesto_ocupado: number): Observable<number>{
    return this.http.get<number>(`${this.urlEndPoint}/resultados/${id}/${puesto_ocupado}`);
  }

  obtenerJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(`${this.urlEndPoint}/juegos`)
  }
}
