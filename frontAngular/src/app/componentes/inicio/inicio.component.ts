import { Component, OnInit } from '@angular/core';
import { PaginaServices } from '../../servicios/paginaServices';
import { Locations } from 'src/app/modelos/locations';
import { Global } from 'src/app/servicios/global';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [PaginaServices]
})
export class InicioComponent implements OnInit{
  public ubicacion: Locations[]
  public url: string
  constructor(
    private ubicacionService: PaginaServices,
  ){
    this.url = Global.url;
    this.ubicacion = [];

  }
  ngOnInit(): void {
    this.getLocaciones()
  }
  getLocaciones(){
    this.ubicacionService.getAllLocations().subscribe(
      response => {
        if (response.location) {
          this.ubicacion = response.location
          console.log(this.ubicacion)
        }
        else{
          console.log(response)
        }
      }
    )
  }

}
