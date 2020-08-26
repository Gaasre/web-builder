import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToolboxComponent } from './text-toolbox.component';

describe('TextToolboxComponent', () => {
  let component: TextToolboxComponent;
  let fixture: ComponentFixture<TextToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
