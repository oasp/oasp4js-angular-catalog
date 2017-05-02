import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevonfwComponent } from './devonfw.component';

describe('DevonfwComponent', () => {
  let component: DevonfwComponent;
  let fixture: ComponentFixture<DevonfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevonfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevonfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
