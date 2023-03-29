import { TestBed } from '@angular/core/testing';

import { ViewTenantsService } from './view-tenants.service';

describe('ViewTenantsService', () => {
  let service: ViewTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
