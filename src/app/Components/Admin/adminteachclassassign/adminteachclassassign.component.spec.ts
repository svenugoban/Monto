import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteachclassassignComponent } from './adminteachclassassign.component';

describe('AdminteachclassassignComponent', () => {
  let component: AdminteachclassassignComponent;
  let fixture: ComponentFixture<AdminteachclassassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminteachclassassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminteachclassassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
