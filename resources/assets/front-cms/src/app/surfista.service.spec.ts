import { TestBed } from '@angular/core/testing';

import { SurfistaService } from './surfista.service';

describe('SurfistaService', () => {
  let service: SurfistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
