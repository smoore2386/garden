import { TestBed, inject } from '@angular/core/testing';

import { GardenStatsService } from './garden-stats.service';

describe('GardenStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GardenStatsService]
    });
  });

  it('should ...', inject([GardenStatsService], (service: GardenStatsService) => {
    expect(service).toBeTruthy();
  }));
});
