import { TestBed } from '@angular/core/testing';

import { CustomersdataService } from './customerdata.service';

describe('CustomerdataService', () => {
  let service: CustomersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
