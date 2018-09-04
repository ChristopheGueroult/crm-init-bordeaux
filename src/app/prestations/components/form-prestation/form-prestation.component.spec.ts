import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestationComponent } from './form-prestation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormPrestationComponent', () => {
  let component: FormPrestationComponent;
  let fixture: ComponentFixture<FormPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, ReactiveFormsModule],
      declarations: [ FormPrestationComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
