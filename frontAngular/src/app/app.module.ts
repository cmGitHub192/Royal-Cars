
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaginaServices } from './servicios/paginaServices';
import { ListadobusquedaComponent } from './componentes/listadobusqueda/listadobusqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadobusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbDatepickerModule, 
    FormsModule, 
    JsonPipe
  ],
  providers: [PaginaServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
