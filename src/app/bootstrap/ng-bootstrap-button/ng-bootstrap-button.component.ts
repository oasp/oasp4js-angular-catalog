import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-bootstrap-button',
  templateUrl: './ng-bootstrap-button.component.html',
  styleUrls: ['./ng-bootstrap-button.component.css']
})
export class NgBootstrapButtonComponent implements OnInit {

  model_1 = 1;

  model_2 = {
   left: true,
   middle: false,
   right: false,
 };
  constructor() { }

  ngOnInit() {
  }

}
