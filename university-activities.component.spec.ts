import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityActivitiesComponent } from './university-activities.component';

describe('UniversityActivitiesComponent', () => {
  let component: UniversityActivitiesComponent;
  let fixture: ComponentFixture<UniversityActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
