import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaissementsFaireComponent } from './encaissements-faire.component';

describe('EncaissementsFaireComponent', () => {
  let component: EncaissementsFaireComponent;
  let fixture: ComponentFixture<EncaissementsFaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncaissementsFaireComponent]
    });
    fixture = TestBed.createComponent(EncaissementsFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
