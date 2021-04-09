import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DataService);

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get with the correct URL', () => {
    service.getItems().subscribe( items => console.log(items));
    const req = httpTestingController.expectOne(service.getDataUrl);
    req.flush({userId: 8, userName: 'John Doe', userPhone: '999-999-9999'});
    httpTestingController.verify();
    console.log("Req:  ", req.request.url);
    expect(req.request.url).toContain('assets/api/users.json');
  });

});
