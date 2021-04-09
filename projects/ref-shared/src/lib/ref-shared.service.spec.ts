import { TestBed } from '@angular/core/testing';

import { RefSharedService } from './ref-shared.service';

describe('RefSharedService', () => {
  let service: RefSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
