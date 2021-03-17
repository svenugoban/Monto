import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteralComponent } from './footeral.component';

describe('FooteralComponent', () => {
  let component: FooteralComponent;
  let fixture: ComponentFixture<FooteralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
