import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  car: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.car = navigation?.extras.state?.['car'];
  }

  ngOnInit(): void {}
}
