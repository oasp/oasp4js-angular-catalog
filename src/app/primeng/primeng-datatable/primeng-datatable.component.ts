import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/carservice';
import { Car } from '../../service/car';

@Component({
  selector: 'app-primeng-datatable',
  templateUrl: './primeng-datatable.component.html',
  styleUrls: ['./primeng-datatable.component.css']
})
export class PrimengDatatableComponent implements OnInit {

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }
}
