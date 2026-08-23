import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRegisterBody } from './expense-register-body';

describe('ExpenseRegisterBody', () => {
  let component: ExpenseRegisterBody;
  let fixture: ComponentFixture<ExpenseRegisterBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseRegisterBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseRegisterBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
