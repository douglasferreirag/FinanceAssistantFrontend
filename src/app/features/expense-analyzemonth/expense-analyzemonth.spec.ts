import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAnalyzeMonthComponent } from './expense-analyzemonth.component';

describe('ExpenseAnalyzeMonth', () => {
  let component: ExpenseAnalyzeMonthComponent;
  let fixture: ComponentFixture<ExpenseAnalyzeMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeMonthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeMonthComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
