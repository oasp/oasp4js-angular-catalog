import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OASP4NETComponent } from './oasp4-net.component';

describe('OASP4NETComponent', () => {
  let component: OASP4NETComponent;
  let fixture: ComponentFixture<OASP4NETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OASP4NETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OASP4NETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
