import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-input-text-area',
  templateUrl: './primeng-input-text-area.component.html',
  styleUrls: ['./primeng-input-text-area.component.css']
})
export class PrimengInputTextAreaComponent implements OnInit {

  constructor() { }

  text: string;

  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  ngOnInit() {
  }
}
