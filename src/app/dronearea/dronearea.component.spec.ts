import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneareaComponent } from './dronearea.component';

describe('DroneareaComponent', () => {
  let component: DroneareaComponent;
  let fixture: ComponentFixture<DroneareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
