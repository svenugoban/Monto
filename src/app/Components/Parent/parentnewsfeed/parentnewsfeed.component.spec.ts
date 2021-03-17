import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnewsfeedComponent } from './parentnewsfeed.component';

describe('ParentnewsfeedComponent', () => {
  let component: ParentnewsfeedComponent;
  let fixture: ComponentFixture<ParentnewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentnewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentnewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
