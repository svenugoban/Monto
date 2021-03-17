import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachregstudentComponent } from './teachregstudent.component';

describe('TeachregstudentComponent', () => {
  let component: TeachregstudentComponent;
  let fixture: ComponentFixture<TeachregstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachregstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachregstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
