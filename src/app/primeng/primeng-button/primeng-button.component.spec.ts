import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengButtonComponent } from './primeng-button.component';

describe('PrimengButtonComponent', () => {
  let component: PrimengButtonComponent;
  let fixture: ComponentFixture<PrimengButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
