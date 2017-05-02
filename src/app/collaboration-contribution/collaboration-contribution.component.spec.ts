import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationContributionComponent } from './collaboration-contribution.component';

describe('CollaborationContributionComponent', () => {
  let component: CollaborationContributionComponent;
  let fixture: ComponentFixture<CollaborationContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborationContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
