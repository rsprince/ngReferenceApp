import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefSharedComponent } from './ref-shared.component';

describe('RefSharedComponent', () => {
  let component: RefSharedComponent;
  let fixture: ComponentFixture<RefSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
