import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMenubarComponent } from './primeng-menubar.component';

describe('PrimengMenubarComponent', () => {
  let component: PrimengMenubarComponent;
  let fixture: ComponentFixture<PrimengMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
