import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRegisterHeader } from './expense-register-header';

describe('ExpenseRegisterHeader', () => {
  let component: ExpenseRegisterHeader;
  let fixture: ComponentFixture<ExpenseRegisterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseRegisterHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseRegisterHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
