import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTooltipComponent } from './ng-bootstrap-tooltip.component';

describe('NgBootstrapTooltipComponent', () => {
  let component: NgBootstrapTooltipComponent;
  let fixture: ComponentFixture<NgBootstrapTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
