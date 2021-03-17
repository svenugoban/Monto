import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteachprofComponent } from './editteachprof.component';

describe('EditteachprofComponent', () => {
  let component: EditteachprofComponent;
  let fixture: ComponentFixture<EditteachprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditteachprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditteachprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
