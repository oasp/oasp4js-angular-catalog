import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OASPComponent } from './oasp.component';

describe('OASPComponent', () => {
  let component: OASPComponent;
  let fixture: ComponentFixture<OASPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OASPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OASPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
