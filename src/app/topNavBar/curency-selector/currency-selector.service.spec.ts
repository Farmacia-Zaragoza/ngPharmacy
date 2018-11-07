import { TestBed, inject } from '@angular/core/testing';

import { CurrencySelectorService } from './currency-selector.service';

describe('CurrencySelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencySelectorService]
    });
  });

  it('should be created', inject([CurrencySelectorService], (service: CurrencySelectorService) => {
    expect(service).toBeTruthy();
  }));
});
