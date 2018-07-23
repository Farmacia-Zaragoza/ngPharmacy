import { TestBed, inject } from '@angular/core/testing';

import { LanguageSelectorService } from './language-selector.service';

describe('LanguageSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageSelectorService]
    });
  });

  it('should be created', inject([LanguageSelectorService], (service: LanguageSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
