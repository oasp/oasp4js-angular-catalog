import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapCarouselComponent } from './ng-bootstrap-carousel.component';

describe('NgBootstrapCarouselComponent', () => {
  let component: NgBootstrapCarouselComponent;
  let fixture: ComponentFixture<NgBootstrapCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
