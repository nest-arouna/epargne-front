import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsCaisseComponent } from './transactions-caisse.component';

describe('TransactionsCaisseComponent', () => {
  let component: TransactionsCaisseComponent;
  let fixture: ComponentFixture<TransactionsCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsCaisseComponent]
    });
    fixture = TestBed.createComponent(TransactionsCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
