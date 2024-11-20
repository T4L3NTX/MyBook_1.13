import { TestBed } from '@angular/core/testing';

import { PablitoNeukenService } from './pablito-neuken.service';

describe('PablitoNeukenService', () => {
  let service: PablitoNeukenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PablitoNeukenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
