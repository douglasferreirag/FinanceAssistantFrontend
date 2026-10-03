import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ExpenseAnalyzeHistoryHeaderComponent } from './expense-analyzehistory-header.component';

describe('ExpenseAnalyzeHistoryHeaderComponent', () => {
  let component: ExpenseAnalyzeHistoryHeaderComponent;
  let fixture: ComponentFixture<ExpenseAnalyzeHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeHistoryHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeHistoryHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
