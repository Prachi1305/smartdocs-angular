import { TestBed } from '@angular/core/testing';

import { AssessmentyearService } from './assessmentyear.service';

describe('AssessmentyearService', () => {
  let service: AssessmentyearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentyearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
