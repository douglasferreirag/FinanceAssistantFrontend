import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAnalyzeMonthHeader } from './expense-analyzemonth-header';

describe('ExpenseAnalyzeMonthHeader', () => {
  let component: ExpenseAnalyzeMonthHeader;
  let fixture: ComponentFixture<ExpenseAnalyzeMonthHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeMonthHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeMonthHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
