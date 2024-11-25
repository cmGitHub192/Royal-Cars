import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListadobusquedaComponent } from './componentes/listadobusqueda/listadobusqueda.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'listadobusqueda/:locationId', component: ListadobusquedaComponent },
  { path: 'resumen', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
