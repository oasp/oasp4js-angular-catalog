import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OASP4JComponent } from './oasp4-j.component';

describe('OASP4JComponent', () => {
  let component: OASP4JComponent;
  let fixture: ComponentFixture<OASP4JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OASP4JComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OASP4JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
