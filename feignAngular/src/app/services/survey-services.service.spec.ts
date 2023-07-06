import { TestBed } from '@angular/core/testing';

import { SurveyServicesService } from './survey-services.service';

describe('SurveyServicesService', () => {
  let service: SurveyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
