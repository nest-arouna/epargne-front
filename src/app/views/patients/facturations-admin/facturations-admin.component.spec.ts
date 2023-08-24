import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationsAdminComponent } from './facturations-admin.component';

describe('FacturationsAdminComponent', () => {
  let component: FacturationsAdminComponent;
  let fixture: ComponentFixture<FacturationsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationsAdminComponent]
    });
    fixture = TestBed.createComponent(FacturationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
