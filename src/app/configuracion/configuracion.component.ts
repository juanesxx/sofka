import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../jugadores/jugador';
import { ConfiguracionService } from './configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  jugador: Jugador = new Jugador();
  jugadores: Jugador[] | undefined;
  constructor(
    private configuracionService: ConfiguracionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  save(): void {
    var existe: boolean = false;
    this.configuracionService.obtenerJugadores()
      .subscribe(jugadores => {
        this.jugadores = jugadores
        this.jugadores.forEach(element => {

          if (element.vehiculo == this.jugador.vehiculo) {
            existe = true;
          }
        });
        if (existe == false) {
          this.guardar();
        } else {
          alert("Ya está registrado el vehículo")
        }
      }
      );


  }

  obtenerJugadores(): void {

  }

  guardar(): void {
    this.configuracionService.guardar(this.jugador)
      .subscribe(jugador => {
        alert("Registado correctamente");
        window.location.reload();
      }
      );
  }

}
