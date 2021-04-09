import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Home'`, () => {
    component.title = "My Home";
    expect(component.title).toEqual('My Home');
  });

  it('Template should render title as "Homebody"', () => {
    component.title = "Homebody";
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Homebody');
  });

  it('Template should render test class as "My Test"', () => {
    component.test = "My Test";
    fixture.detectChanges();

    let debugEl = fixture.debugElement.query(By.css('.test'));
    expect(debugEl.nativeElement.textContent).toContain('My Test');

    //expect(fixture.nativeElement.querySelector('.test').textContent).toContain('My Test');
    //expect(fixture.debugElement.query(By.css('.test')).nativeElement.textContent).toContain('My Test');
  });
});
