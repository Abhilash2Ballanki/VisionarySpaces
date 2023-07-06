import { TestBed } from '@angular/core/testing';

import { FeignServicesService } from './feign-services.service';

describe('FeignServicesService', () => {
  let service: FeignServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeignServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
