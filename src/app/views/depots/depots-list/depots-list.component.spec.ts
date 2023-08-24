import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsListComponent } from './depots-list.component';

describe('DepotsListComponent', () => {
  let component: DepotsListComponent;
  let fixture: ComponentFixture<DepotsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotsListComponent]
    });
    fixture = TestBed.createComponent(DepotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
