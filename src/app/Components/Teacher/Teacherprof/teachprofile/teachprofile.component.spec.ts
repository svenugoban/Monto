import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachprofileComponent } from './teachprofile.component';

describe('TeachprofileComponent', () => {
  let component: TeachprofileComponent;
  let fixture: ComponentFixture<TeachprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
