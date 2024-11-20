import { TestBed } from '@angular/core/testing';

import { PablitoNeukenServiceService } from './pablito-neuken-service.service';

describe('PablitoNeukenServiceService', () => {
  let service: PablitoNeukenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PablitoNeukenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
