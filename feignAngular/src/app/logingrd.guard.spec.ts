import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logingrdGuard } from './logingrd.guard';

describe('logingrdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logingrdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
