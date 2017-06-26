import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCheckboxComponent } from './primeng-checkbox.component';

describe('PrimengCheckboxComponent', () => {
  let component: PrimengCheckboxComponent;
  let fixture: ComponentFixture<PrimengCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
