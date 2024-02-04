import { TestBed } from '@angular/core/testing';

import { PetfinderService } from './find.service';
  // Adjust the path as needed


describe('PetfinderService', () => {
  let service: PetfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
