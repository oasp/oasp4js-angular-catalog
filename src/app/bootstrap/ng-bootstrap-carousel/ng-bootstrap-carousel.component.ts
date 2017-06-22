import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-bootstrap-carousel',
  templateUrl: './ng-bootstrap-carousel.component.html',
  styleUrls: ['./ng-bootstrap-carousel.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class NgBootstrapCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
  }

}
