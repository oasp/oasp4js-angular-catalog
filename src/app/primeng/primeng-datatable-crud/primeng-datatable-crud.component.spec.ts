import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDatatableCrudComponent } from './primeng-datatable-crud.component';

describe('PrimengDatatableCrudComponent', () => {
  let component: PrimengDatatableCrudComponent;
  let fixture: ComponentFixture<PrimengDatatableCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDatatableCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDatatableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
