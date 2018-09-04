import { TestBed, inject } from '@angular/core/testing';

import { DatesService } from './dates.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './ngdatecustomformater.service';

describe('DatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatesService, {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}]
    });
  });

  it('should be created', inject([DatesService], (service: DatesService) => {
    expect(service).toBeTruthy();
  }));
});
