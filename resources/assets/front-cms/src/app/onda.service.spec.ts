import { TestBed } from '@angular/core/testing';

import { OndaService } from './onda.service';

describe('OndaService', () => {
  let service: OndaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OndaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
