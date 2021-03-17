import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnotificationComponent } from './parentnotification.component';

describe('ParentnotificationComponent', () => {
  let component: ParentnotificationComponent;
  let fixture: ComponentFixture<ParentnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
