import { TestBed, inject } from '@angular/core/testing';

import { ResolverPrestationService } from './resolver-prestation.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResolverPrestationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ResolverPrestationService]
    });
  });

  it('should be created', inject([ResolverPrestationService], (service: ResolverPrestationService) => {
    expect(service).toBeTruthy();
  }));
});
