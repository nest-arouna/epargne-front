import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsDetailsComponent } from './depots-details.component';

describe('DepotsDetailsComponent', () => {
  let component: DepotsDetailsComponent;
  let fixture: ComponentFixture<DepotsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotsDetailsComponent]
    });
    fixture = TestBed.createComponent(DepotsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
