import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationsPatientComponent } from './facturations-patient.component';

describe('FacturationsPatientComponent', () => {
  let component: FacturationsPatientComponent;
  let fixture: ComponentFixture<FacturationsPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationsPatientComponent]
    });
    fixture = TestBed.createComponent(FacturationsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
