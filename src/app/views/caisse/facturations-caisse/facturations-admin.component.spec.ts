import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationsCaisseComponent } from './facturations-caisse.component';

describe('FacturationsCaisseComponent', () => {
  let component: FacturationsCaisseComponent;
  let fixture: ComponentFixture<FacturationsCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturationsCaisseComponent]
    });
    fixture = TestBed.createComponent(FacturationsCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
