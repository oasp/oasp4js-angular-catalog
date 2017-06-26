import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-checkbox',
  templateUrl: './primeng-checkbox.component.html',
  styleUrls: ['./primeng-checkbox.component.css']
})
export class PrimengCheckboxComponent implements OnInit {

  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
