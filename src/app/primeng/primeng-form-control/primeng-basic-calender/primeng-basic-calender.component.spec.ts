import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengBasicCalenderComponent } from './primeng-basic-calender.component';

describe('PrimengBasicCalenderComponent', () => {
  let component: PrimengBasicCalenderComponent;
  let fixture: ComponentFixture<PrimengBasicCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengBasicCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengBasicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
