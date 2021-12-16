import { TestBed } from '@angular/core/testing';

import { LaunchesdataService } from './launchesdata.service';

describe('LaunchesdataService', () => {
  let service: LaunchesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
