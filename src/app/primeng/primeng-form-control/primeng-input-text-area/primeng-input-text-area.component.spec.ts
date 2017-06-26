import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengInputTextAreaComponent } from './primeng-input-text-area.component';

describe('PrimengInputTextAreaComponent', () => {
  let component: PrimengInputTextAreaComponent;
  let fixture: ComponentFixture<PrimengInputTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengInputTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengInputTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
