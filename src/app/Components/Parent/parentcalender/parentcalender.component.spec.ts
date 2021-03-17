import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcalenderComponent } from './parentcalender.component';

describe('ParentcalenderComponent', () => {
  let component: ParentcalenderComponent;
  let fixture: ComponentFixture<ParentcalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
