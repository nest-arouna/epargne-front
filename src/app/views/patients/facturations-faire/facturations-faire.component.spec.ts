import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationsFaireComponent } from './facturations-faire.component';

describe('FacturationsFaireComponent', () => {
  let component: FacturationsFaireComponent;
  let fixture: ComponentFixture<FacturationsFaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationsFaireComponent]
    });
    fixture = TestBed.createComponent(FacturationsFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
