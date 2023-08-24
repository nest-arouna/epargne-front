import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwdUserComponent } from './changepwd-user.component';

describe('ChangepwdUserComponent', () => {
  let component: ChangepwdUserComponent;
  let fixture: ComponentFixture<ChangepwdUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepwdUserComponent]
    });
    fixture = TestBed.createComponent(ChangepwdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
