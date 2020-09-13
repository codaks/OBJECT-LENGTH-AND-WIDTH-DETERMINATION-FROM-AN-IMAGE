import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalLengthComponent } from './cal-length.component';

describe('CalLengthComponent', () => {
  let component: CalLengthComponent;
  let fixture: ComponentFixture<CalLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
