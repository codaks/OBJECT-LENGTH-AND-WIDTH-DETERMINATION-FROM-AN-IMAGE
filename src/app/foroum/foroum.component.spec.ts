import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoumComponent } from './foroum.component';

describe('ForoumComponent', () => {
  let component: ForoumComponent;
  let fixture: ComponentFixture<ForoumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
