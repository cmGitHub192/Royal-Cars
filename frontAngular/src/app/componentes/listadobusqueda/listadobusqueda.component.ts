import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modelos/car';
import { PaginaServices } from 'src/app/servicios/paginaServices';

@Component({
  selector: 'app-listadobusqueda',
  templateUrl: './listadobusqueda.component.html',
  styleUrls: ['./listadobusqueda.component.css']
})
export class ListadobusquedaComponent {
  cars: Car[] = [];
  selectedCar?: Car;
  locationId: number = 0;
  brand: string = "";
  model: string = "";

  constructor(private route: ActivatedRoute, private carService: PaginaServices) {}

  ngOnInit(): void {
    // Obtiene los parámetros de consulta
    this.route.queryParams.subscribe((params) => {
      this.locationId = params['locationId'] ? +params['locationId'] : 1;
      this.brand = params['brand'] || null;
      this.model = params['model'] || null;

      // Realiza la búsqueda con los parámetros recibidos
      this.searchCars();
    });
  }

  

  searchCars(): void {
    this.carService
      .searchCars({ locationId: this.locationId, brand: this.brand, model: this.model })
      .subscribe(
        (data) => (this.cars = data),
        (error) => console.error("Error al buscar coches:", error)
      );
  }
}
