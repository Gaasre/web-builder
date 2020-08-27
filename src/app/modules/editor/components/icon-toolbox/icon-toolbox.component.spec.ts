import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToolboxComponent } from './icon-toolbox.component';

describe('IconToolboxComponent', () => {
  let component: IconToolboxComponent;
  let fixture: ComponentFixture<IconToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
