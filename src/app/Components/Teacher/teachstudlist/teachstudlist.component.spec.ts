import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachstudlistComponent } from './teachstudlist.component';

describe('TeachstudlistComponent', () => {
  let component: TeachstudlistComponent;
  let fixture: ComponentFixture<TeachstudlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachstudlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachstudlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
