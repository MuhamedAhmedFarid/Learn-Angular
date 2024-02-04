import { TestBed } from '@angular/core/testing';

import { MyFovoritiesService } from './my-fovorities.service';

describe('MyFovoritiesService', () => {
  let service: MyFovoritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFovoritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
