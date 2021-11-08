import { TestBed } from '@angular/core/testing';

import { ZuluService } from './zulu.service';

describe('ZuluService', () => {
  let service: ZuluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZuluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
