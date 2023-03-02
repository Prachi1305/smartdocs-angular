import { TestBed } from '@angular/core/testing';

import { SystemTypeMasterService } from './system-type-master.service';

describe('SystemTypeMasterService', () => {
  let service: SystemTypeMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemTypeMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
