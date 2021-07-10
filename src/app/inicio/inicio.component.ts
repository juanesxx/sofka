import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../jugadores/juego';
import { Vehiculo } from '../jugadores/vehiculo';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  valorSeleccionado: number;
  varSeleccion: number = 0;
  ganadores = new Array(3);
  private vehiculo: Vehiculo;
  vehiculos: Vehiculo[] | undefined;
  juego: Juego = new Juego();
  constructor(
    private inicioService: InicioService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.inicioService.obtenerVehiculos().subscribe(
      vehiculos =>{
        this.vehiculos = vehiculos;
      }
    )
  }



  dados(): void {
    var numAzar = Math.floor(Math.random() * (7 - 1) + 1);
    var metrosAvanzados = numAzar * 100;
    var avanzadoString = String(metrosAvanzados);
    var azarString = String(numAzar);
    this.vehiculo.metros_avanzados += metrosAvanzados;
    document.getElementById('lblMetros').innerHTML = String(this.vehiculo.metros_avanzados);
    document.getElementById('lblResultado').innerHTML = azarString;
    document.getElementById('lblRecorrido').innerHTML = avanzadoString;
    this.ganador();
  }

  ganador(): void {
    if (this.vehiculo.metros_avanzados >= 5000) {
      for (var i = 0; i <= 2; i++) {
        if (this.ganadores[i] == null) {
          if (this.vehiculo.id !== this.ganadores[0] && this.vehiculo.id !== this.ganadores[1] && this.vehiculo.id !== this.ganadores[2]) {
            this.ganadores[i] = this.vehiculo.id;
          }
        }
      }
    }
    document.getElementById('lblPrimerPuesto').innerHTML = this.ganadores[0];
    document.getElementById('lblSegundoPuesto').innerHTML = this.ganadores[1];
    document.getElementById('lblTercerPuesto').innerHTML = this.ganadores[2];


  }

  cargarVehiculo(): void {
    this.inicioService.obtenerVehiculo(this.valorSeleccionado).subscribe(
      (vehiculo => {
        this.vehiculo = vehiculo
        document.getElementById('lblMetros').innerHTML = String(this.vehiculo.metros_avanzados);
        document.getElementById('lblCarril').innerHTML = String(this.vehiculo.carril);
      }
      )
    )
  }

  actualizar(): void {
    this.inicioService.actualizar(this.vehiculo)
      .subscribe(vehiculo => {
        this.router.navigate(['/inicio'])
      }
      );
  }

  resetear(): void {
    this.inicioService.reiniciar().subscribe();
    window.location.reload();
  }

  terminar(): void {
    for (var i = 0; i <= 2; i++) {
      if (this.ganadores[i] > 0) {
        this.juego.id_vehiculo = this.ganadores[i];
        this.juego.puesto_ocupado = i + 1;
        this.guardar();
      }
    }
    window.location.reload();

  }

  guardar(): void {
    this.inicioService.guardarDatos(this.juego)
      .subscribe(juego => {
        this.router.navigate(['/inicio'])
      });
  }


}

