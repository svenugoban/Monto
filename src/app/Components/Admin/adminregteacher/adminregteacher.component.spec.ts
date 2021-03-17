import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregteacherComponent } from './adminregteacher.component';

describe('AdminregteacherComponent', () => {
  let component: AdminregteacherComponent;
  let fixture: ComponentFixture<AdminregteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminregteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
