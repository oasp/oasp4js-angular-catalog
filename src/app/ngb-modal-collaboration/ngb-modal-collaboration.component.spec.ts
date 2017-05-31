import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModalCollaborationComponent } from './ngb-modal-collaboration.component';

describe('NgbModalCollaborationComponent', () => {
  let component: NgbModalCollaborationComponent;
  let fixture: ComponentFixture<NgbModalCollaborationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbModalCollaborationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbModalCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
