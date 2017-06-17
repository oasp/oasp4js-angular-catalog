import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCalenderComponent } from './basic-calender.component';

describe('BasicCalenderComponent', () => {
  let component: BasicCalenderComponent;
  let fixture: ComponentFixture<BasicCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
