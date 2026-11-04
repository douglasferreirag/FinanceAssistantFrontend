import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDashboardSummaryBodyComponent } from './expense-dashboard-summary-body.js';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ExpenseDashboardSummaryBody', () => {
  let component: ExpenseDashboardSummaryBodyComponent;
  let fixture: ComponentFixture<ExpenseDashboardSummaryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseDashboardSummaryBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseDashboardSummaryBodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
