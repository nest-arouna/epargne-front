import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationsDetailComponent } from './facturations-detail.component';

describe('FacturationsDetailComponent', () => {
  let component: FacturationsDetailComponent;
  let fixture: ComponentFixture<FacturationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationsDetailComponent]
    });
    fixture = TestBed.createComponent(FacturationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
