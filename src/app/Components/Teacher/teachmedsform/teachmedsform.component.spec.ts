import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachmedsformComponent } from './teachmedsform.component';

describe('TeachmedsformComponent', () => {
  let component: TeachmedsformComponent;
  let fixture: ComponentFixture<TeachmedsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachmedsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachmedsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
