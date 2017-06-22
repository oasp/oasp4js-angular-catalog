import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDatepickerComponent } from './ng-bootstrap-datepicker.component';

describe('NgBootstrapDatepickerComponent', () => {
  let component: NgBootstrapDatepickerComponent;
  let fixture: ComponentFixture<NgBootstrapDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
