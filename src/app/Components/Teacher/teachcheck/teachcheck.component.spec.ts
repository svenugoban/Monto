import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachcheckComponent } from './teachcheck.component';

describe('TeachcheckComponent', () => {
  let component: TeachcheckComponent;
  let fixture: ComponentFixture<TeachcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
