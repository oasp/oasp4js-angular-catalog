import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapFormControlComponent } from './ng-bootstrap-form-control.component';

describe('NgBootstrapFormControlComponent', () => {
  let component: NgBootstrapFormControlComponent;
  let fixture: ComponentFixture<NgBootstrapFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
