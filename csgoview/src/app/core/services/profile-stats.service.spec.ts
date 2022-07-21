import { TestBed } from '@angular/core/testing';

import { ProfileStatsService } from './profile-stats.service';

describe('ProfileStatsService', () => {
  let service: ProfileStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
