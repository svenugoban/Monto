import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintopComponent } from './admintop.component';

describe('AdmintopComponent', () => {
  let component: AdmintopComponent;
  let fixture: ComponentFixture<AdmintopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
