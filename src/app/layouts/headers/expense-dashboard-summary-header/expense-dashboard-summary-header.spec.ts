import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDashboardSummaryHeaderComponent } from './expense-dashboard-summary-header.js';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ExpenseDashboardSummaryHeader', () => {
  let component: ExpenseDashboardSummaryHeaderComponent;
  let fixture: ComponentFixture<ExpenseDashboardSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseDashboardSummaryHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseDashboardSummaryHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
