import { TestBed } from '@angular/core/testing';

import { DynamicComponentsResolver } from './dynamic-component-resolver.service';

describe('DynamicComponentResolverService', () => {
  let service: DynamicComponentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
