import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengPasswordComponent } from './primeng-password.component';

describe('PrimengPasswordComponent', () => {
  let component: PrimengPasswordComponent;
  let fixture: ComponentFixture<PrimengPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
