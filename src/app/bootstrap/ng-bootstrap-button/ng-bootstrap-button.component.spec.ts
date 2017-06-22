import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapButtonComponent } from './ng-bootstrap-button.component';

describe('NgBootstrapButtonComponent', () => {
  let component: NgBootstrapButtonComponent;
  let fixture: ComponentFixture<NgBootstrapButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
