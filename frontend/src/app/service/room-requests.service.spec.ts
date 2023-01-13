import { TestBed } from '@angular/core/testing';

import { RoomRequestsService } from './room-requests.service';

describe('RoomRequestsService', () => {
  let service: RoomRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
