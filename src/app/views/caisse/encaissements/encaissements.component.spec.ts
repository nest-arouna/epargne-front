import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaissementsComponent } from './encaissements.component';

describe('EncaissementsComponent', () => {
  let component: EncaissementsComponent;
  let fixture: ComponentFixture<EncaissementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncaissementsComponent]
    });
    fixture = TestBed.createComponent(EncaissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
