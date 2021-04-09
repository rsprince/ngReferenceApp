import { AngularMaterialsModule } from './../../shared/angular-materials.module';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../data.service';

import { DataComponent } from './data.component';
import { By } from '@angular/platform-browser';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let mockDataService;
  let DATA;

  beforeEach(async(() => {
    DATA = [
      {userId: 8, userName: 'John Doe', userPhone: '999-999-9999'},
      {userId: 9, userName: 'Jane Doe', userPhone: '666-666-6666'}
    ];
    mockDataService = jasmine.createSpyObj(['getItems']);
    mockDataService.getItems.and.returnValue(of(DATA));

    TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      imports: [
        HttpClientModule,
        AngularMaterialsModule
       ],
      providers: [
        { provide: DataService, useValue: mockDataService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set users correctly from the service', () => {
    fixture.detectChanges();
    expect(component.users.length).toBe(2);
  });

  it('should create one flex-container for each user', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.flex-container')).length).toBe(3); // mock data plus header
  });
});
