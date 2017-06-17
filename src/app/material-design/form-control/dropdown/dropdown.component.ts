import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedValue: string;

    foods = [
      {value: 'steak', viewValue: 'Steak'},
      {value: 'pizza', viewValue: 'Pizza'},
      {value: 'tacos', viewValue: 'Tacos'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
