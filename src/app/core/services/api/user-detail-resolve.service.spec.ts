import { TestBed, inject } from '@angular/core/testing';

import { UserDetailResolveService } from './user-detail-resolve.service';

describe('UserDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailResolveService]
    });
  });

  it('should be created', inject([UserDetailResolveService], (service: UserDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
