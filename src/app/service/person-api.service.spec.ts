import { TestBed, inject } from '@angular/core/testing';

import { PersonApiService } from './person-api.service';

describe('PersonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonApiService]
    });
  });

  it('should be created', inject([PersonApiService], (service: PersonApiService) => {
    expect(service).toBeTruthy();
  }));
});
