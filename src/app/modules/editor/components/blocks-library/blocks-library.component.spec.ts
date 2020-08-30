import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksLibraryComponent } from './blocks-library.component';

describe('BlocksLibraryComponent', () => {
  let component: BlocksLibraryComponent;
  let fixture: ComponentFixture<BlocksLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
