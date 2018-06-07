import { TestBed, inject } from '@angular/core/testing';

import { PFooterService } from './p-footer.service';

describe('PFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PFooterService]
    });
  });

  it('should be created', inject([PFooterService], (service: PFooterService) => {
    expect(service).toBeTruthy();
  }));
});
