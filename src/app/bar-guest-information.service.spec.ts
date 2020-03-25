import { TestBed } from '@angular/core/testing';

import { BarGuestInformationService } from './bar-guest-information.service';

describe('BarGuestInformationService', () => {
  let service: BarGuestInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarGuestInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
