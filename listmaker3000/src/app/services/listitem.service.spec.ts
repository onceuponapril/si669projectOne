import { TestBed } from '@angular/core/testing';

import { ListitemService } from './listitem.service';

describe('ListitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListitemService = TestBed.get(ListitemService);
    expect(service).toBeTruthy();
  });
});
