import { TestBed, inject } from '@angular/core/testing';

import { PrestationService } from './prestation.service';
import { Prestation } from '../../shared/models/prestation.model';

describe('PrestationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestationService]
    });
  });

  it('should be created', inject([PrestationService], (service: PrestationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a variable collection', inject([PrestationService], (service: PrestationService) => {
    expect(service.collection).toBeDefined();
  }));

  it('collection should be iterable as Prestation array', inject([PrestationService], (service: PrestationService) => {
    service.collection.forEach((col) => {
      expect(col instanceof Prestation).toBeTruthy();
    });
  }));



});
