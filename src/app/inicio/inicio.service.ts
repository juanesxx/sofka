import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../jugadores/juego';
import { Jugador } from '../jugadores/jugador';
import { Vehiculo } from '../jugadores/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private urlEndPoint = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  obtenerVehiculo(id: number): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.urlEndPoint}/${id}`);
  }

  obtenerVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.urlEndPoint}`);
  }


  actualizar(vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.http.put<Vehiculo>(`${this.urlEndPoint}/${vehiculo.id}`, vehiculo, {headers: this.httpHeaders})
  }

  reiniciar(): Observable<any>{
    return this.http.put(this.urlEndPoint, {headers: this.httpHeaders});
  }

  guardarDatos(juegos: Juego[]): Observable<Juego[]>{
    return this.http.post<Juego[]>(`${this.urlEndPoint}/juego`, juegos, {headers: this.httpHeaders});
  }

}
