import { TestBed } from '@angular/core/testing';

import { BlanquirojaService } from './blanquiroja.service';

describe('BlanquirojaService', () => {
  let service: BlanquirojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlanquirojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
