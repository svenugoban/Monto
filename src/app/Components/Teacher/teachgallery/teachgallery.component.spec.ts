import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachgalleryComponent } from './teachgallery.component';

describe('TeachgalleryComponent', () => {
  let component: TeachgalleryComponent;
  let fixture: ComponentFixture<TeachgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
