import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengFormControlComponent } from './primeng-form-control.component';

describe('PrimengFormControlComponent', () => {
  let component: PrimengFormControlComponent;
  let fixture: ComponentFixture<PrimengFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
