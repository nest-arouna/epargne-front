import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacturationComponent } from './detail-facturation.component';

describe('DetailFacturationComponent', () => {
  let component: DetailFacturationComponent;
  let fixture: ComponentFixture<DetailFacturationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFacturationComponent]
    });
    fixture = TestBed.createComponent(DetailFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
