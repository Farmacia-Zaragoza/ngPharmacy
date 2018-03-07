import { TestBed, inject } from '@angular/core/testing';

import { PNavService } from './p-nav.service';

describe('PNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PNavService]
    });
  });

  it('should be created', inject([PNavService], (service: PNavService) => {
    expect(service).toBeTruthy();
  }));
});
