import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteachsignupComponent } from './adminteachsignup.component';

describe('AdminteachsignupComponent', () => {
  let component: AdminteachsignupComponent;
  let fixture: ComponentFixture<AdminteachsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminteachsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminteachsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
