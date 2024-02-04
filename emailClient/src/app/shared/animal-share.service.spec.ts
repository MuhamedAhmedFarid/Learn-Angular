import { TestBed } from '@angular/core/testing';

import { AnimalShareService } from './animal-share.service';

describe('AnimalShareService', () => {
  let service: AnimalShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
