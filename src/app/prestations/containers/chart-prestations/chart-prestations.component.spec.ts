import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPrestationsComponent } from './chart-prestations.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChartPrestationsComponent', () => {
  let component: ChartPrestationsComponent;
  let fixture: ComponentFixture<ChartPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPrestationsComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
