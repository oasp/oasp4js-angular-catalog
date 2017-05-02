import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTechnologiesComponent } from './used-technologies.component';

describe('UsedTechnologiesComponent', () => {
  let component: UsedTechnologiesComponent;
  let fixture: ComponentFixture<UsedTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
