import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockToolboxComponent } from './block-toolbox.component';

describe('BlockToolboxComponent', () => {
  let component: BlockToolboxComponent;
  let fixture: ComponentFixture<BlockToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
