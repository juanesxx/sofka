import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'resultados', component: ResultadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
