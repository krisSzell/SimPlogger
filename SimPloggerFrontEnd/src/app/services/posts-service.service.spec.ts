import { TestBed, inject } from '@angular/core/testing';

import { PostsServiceService } from './posts-service.service';

describe('PostsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsServiceService]
    });
  });

  it('should ...', inject([PostsServiceService], (service: PostsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
