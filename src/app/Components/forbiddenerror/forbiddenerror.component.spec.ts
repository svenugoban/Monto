import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenerrorComponent } from './forbiddenerror.component';

describe('ForbiddenerrorComponent', () => {
  let component: ForbiddenerrorComponent;
  let fixture: ComponentFixture<ForbiddenerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
