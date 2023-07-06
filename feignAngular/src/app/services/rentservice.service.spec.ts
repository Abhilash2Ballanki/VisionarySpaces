import { TestBed } from '@angular/core/testing';

import { RentserviceService } from './rentservice.service';

describe('RentserviceService', () => {
  let service: RentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
