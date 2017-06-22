import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTabsetComponent } from './ng-bootstrap-tabset.component';

describe('NgBootstrapTabsetComponent', () => {
  let component: NgBootstrapTabsetComponent;
  let fixture: ComponentFixture<NgBootstrapTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
