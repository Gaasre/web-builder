import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToolboxComponent } from './image-toolbox.component';

describe('ImageToolboxComponent', () => {
  let component: ImageToolboxComponent;
  let fixture: ComponentFixture<ImageToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
