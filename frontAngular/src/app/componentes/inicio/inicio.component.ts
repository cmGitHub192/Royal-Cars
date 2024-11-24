import { Component, OnInit } from '@angular/core';
import { PaginaServices } from '../../servicios/paginaServices';
import { Locations } from 'src/app/modelos/locations';
import { Global } from 'src/app/servicios/global';
import { Car } from 'src/app/modelos/car';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [PaginaServices]
})
export class InicioComponent implements OnInit{
  public ubicacion: Locations[]
  public cars : Car[]
  public url: string
  constructor(
    private ubicacionService: PaginaServices,
  ){
    this.url = Global.url;
    this.ubicacion = [];
    this.cars = [];

  }
  ngOnInit(): void {
    this.getCars()
    this.getLocaciones()
  }
  getLocaciones(){
    this.ubicacionService.getAllLocations().subscribe(
      response => {
        if (response) {
          this.ubicacion = response
          console.log(this.ubicacion)
        }
      }
    )
  }
  getCars(){
    this.ubicacionService.getAllCars().subscribe(
      response => {
        if (response) {
          this.cars = response
          console.log(this.cars)
        }
      }
    )
  }

}
