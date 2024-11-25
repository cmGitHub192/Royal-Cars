import { Component, OnInit } from '@angular/core';
import { PaginaServices } from '../../servicios/paginaServices';
import { Locations } from 'src/app/modelos/locations';
import { Global } from 'src/app/servicios/global';
import { Car } from 'src/app/modelos/car';
import { Router } from '@angular/router';

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
  selectedLocationId: number | null = null; // ID de la ubicación seleccionada
  selectedCarId: number | null = null;
  constructor(
    private ubicacionService: PaginaServices,
    private router: Router
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
        }
      }
    )
  }

  onSearch(): void {
    // Verifica si hay una ubicación y coche seleccionados
    if (this.selectedLocationId && this.selectedCarId) {
      // Redirige a la página de búsqueda con los parámetros de los filtros
      this.router.navigate(['/listadobusqueda', this.selectedCarId]);
    } else {
      alert('Por favor, selecciona una ubicación y un coche.');
    }
  }

}
