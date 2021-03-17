import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentmessagesComponent } from './parentmessages.component';

describe('ParentmessagesComponent', () => {
  let component: ParentmessagesComponent;
  let fixture: ComponentFixture<ParentmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
