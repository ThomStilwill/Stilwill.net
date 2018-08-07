import { TestBed, inject } from '@angular/core/testing';

import { JsonfileService } from './jsonfile.service';

describe('JsonfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonfileService]
    });
  });

  it('should be created', inject([JsonfileService], (service: JsonfileService) => {
    expect(service).toBeTruthy();
  }));
});
