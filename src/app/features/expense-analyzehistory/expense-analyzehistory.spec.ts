import { beforeEach, describe, expect, it } from 'vitest';
import { ExpenseAnalyzeHistoryComponent } from './expense-analyzehistory.component.js';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('ExpenseAnalyzeHistory', () => {
  let component: ExpenseAnalyzeHistoryComponent;
  let fixture: ComponentFixture<ExpenseAnalyzeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeHistoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
