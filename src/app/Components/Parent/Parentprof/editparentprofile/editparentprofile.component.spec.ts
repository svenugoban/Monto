import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparentprofileComponent } from './editparentprofile.component';

describe('EditparentprofileComponent', () => {
  let component: EditparentprofileComponent;
  let fixture: ComponentFixture<EditparentprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditparentprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditparentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
