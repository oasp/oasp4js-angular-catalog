import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCompListComponent } from './angular-comp-list.component';

describe('AngularCompListComponent', () => {
  let component: AngularCompListComponent;
  let fixture: ComponentFixture<AngularCompListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCompListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCompListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
