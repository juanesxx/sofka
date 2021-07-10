import { Component, ElementRef, OnInit } from '@angular/core';
import { Juego } from '../jugadores/juego';
import { Jugador } from '../jugadores/jugador';
import { Podio } from '../jugadores/podio';
import { Vehiculo } from '../jugadores/vehiculo';
import { ResultadosService } from './resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  veces: number;
  podio: Podio = new Podio();
  juegos: Juego[] | undefined;
  juego: Juego = new Juego();
  jugadores: Jugador[] | undefined;
  vehiculos: Vehiculo[] | undefined;

  constructor(private resultadosService: ResultadosService) { }

  ngOnInit(): void {
  }
}
