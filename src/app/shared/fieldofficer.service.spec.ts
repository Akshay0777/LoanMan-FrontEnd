import { TestBed } from '@angular/core/testing';

import { FieldofficerService } from './fieldofficer.service';

describe('FieldofficerService', () => {
  let service: FieldofficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldofficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
