import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterblComponent } from './footerbl.component';

describe('FooterblComponent', () => {
  let component: FooterblComponent;
  let fixture: ComponentFixture<FooterblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
