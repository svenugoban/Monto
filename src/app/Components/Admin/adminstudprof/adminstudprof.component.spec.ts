import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudprofComponent } from './adminstudprof.component';

describe('AdminstudprofComponent', () => {
  let component: AdminstudprofComponent;
  let fixture: ComponentFixture<AdminstudprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstudprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
