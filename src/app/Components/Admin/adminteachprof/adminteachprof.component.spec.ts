import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteachprofComponent } from './adminteachprof.component';

describe('AdminteachprofComponent', () => {
  let component: AdminteachprofComponent;
  let fixture: ComponentFixture<AdminteachprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminteachprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminteachprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
