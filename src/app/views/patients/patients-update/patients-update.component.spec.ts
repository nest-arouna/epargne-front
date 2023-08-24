import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsUpdateComponent } from './patients-update.component';

describe('PatientsUpdateComponent', () => {
  let component: PatientsUpdateComponent;
  let fixture: ComponentFixture<PatientsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsUpdateComponent]
    });
    fixture = TestBed.createComponent(PatientsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
