import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/modelos/car';
import { PaginaServices } from 'src/app/servicios/paginaServices';

@Component({
  selector: 'app-listadobusqueda',
  templateUrl: './listadobusqueda.component.html',
  styleUrls: ['./listadobusqueda.component.css']
})
export class ListadobusquedaComponent {
  cars: Car[] = [];
  locationId!: number;
  constructor(private router: Router, private route: ActivatedRoute, private carService: PaginaServices) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.locationId = +params['locationId']; // Captura el id desde la URL
      this.getCars();
    });
  }

  getCars() {
    this.carService.searchCarsByLocation(this.locationId).subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        console.error("Error al obtener coches:", err);
      },
      
    });
  }

  selectCar(car: Car) {
    this.router.navigate(['/resumen'], { state: { car } });
  }
}
