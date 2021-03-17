import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachtopComponent } from './teachtop.component';

describe('TeachtopComponent', () => {
  let component: TeachtopComponent;
  let fixture: ComponentFixture<TeachtopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachtopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
