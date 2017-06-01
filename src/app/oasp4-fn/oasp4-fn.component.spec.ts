import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oasp4FnComponent } from './oasp4-fn.component';

describe('Oasp4FnComponent', () => {
  let component: Oasp4FnComponent;
  let fixture: ComponentFixture<Oasp4FnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oasp4FnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oasp4FnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
