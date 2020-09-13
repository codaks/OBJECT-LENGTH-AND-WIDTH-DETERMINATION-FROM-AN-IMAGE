import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredataComponent } from './exploredata.component';

describe('ExploredataComponent', () => {
  let component: ExploredataComponent;
  let fixture: ComponentFixture<ExploredataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploredataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
