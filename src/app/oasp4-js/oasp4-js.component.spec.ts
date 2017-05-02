import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OASP4JSComponent } from './oasp4-js.component';

describe('OASP4JSComponent', () => {
  let component: OASP4JSComponent;
  let fixture: ComponentFixture<OASP4JSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OASP4JSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OASP4JSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
