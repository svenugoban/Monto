import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttopComponent } from './parenttop.component';

describe('ParenttopComponent', () => {
  let component: ParenttopComponent;
  let fixture: ComponentFixture<ParenttopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
