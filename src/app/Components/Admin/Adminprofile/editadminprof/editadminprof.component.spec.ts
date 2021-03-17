import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminprofComponent } from './editadminprof.component';

describe('EditadminprofComponent', () => {
  let component: EditadminprofComponent;
  let fixture: ComponentFixture<EditadminprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
