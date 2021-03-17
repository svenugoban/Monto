import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachmessageComponent } from './teachmessage.component';

describe('TeachmessageComponent', () => {
  let component: TeachmessageComponent;
  let fixture: ComponentFixture<TeachmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
