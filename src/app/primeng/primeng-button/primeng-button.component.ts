import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-button',
  templateUrl: './primeng-button.component.html',
  styleUrls: ['./primeng-button.component.css']
})
export class PrimengButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicks: number = 0;

    count() {
        this.clicks++;
    }
}
