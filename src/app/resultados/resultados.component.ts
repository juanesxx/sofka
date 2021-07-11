import { Component, ElementRef, OnInit } from '@angular/core';
import { Juego } from '../jugadores/juego';
import { Jugador } from '../jugadores/jugador';
import { Resultado } from '../jugadores/resultado';
import { Vehiculo } from '../jugadores/vehiculo';
import { ResultadosService } from './resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  resultados: Resultado[];
  jugadores: Jugador[];

  constructor(private resultadosService: ResultadosService) { }

  ngOnInit(): void {
      this.resultadosService.obtenerResultados().subscribe(
        resultados => {
          this.resultados = resultados;
        }
      );

      this.resultadosService.obtenerJugadores().subscribe(
        jugadores => {
          this.jugadores = jugadores;
        }
      );
  }
}
