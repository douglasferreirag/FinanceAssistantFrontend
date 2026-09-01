import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ExpenseAnalyzeMonthBody } from './expense-analyzemonth-body';

describe('ExpenseAnalyzeMonthBody', () => {
  let component: ExpenseAnalyzeMonthBody;
  let fixture: ComponentFixture<ExpenseAnalyzeMonthBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeMonthBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeMonthBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
