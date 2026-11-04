import { beforeEach, describe, expect, it } from 'vitest';
import { ExpenseDashboardSummaryComponent } from './expense-dashboard-summary.js';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ExpenseDashboardComponent', () => {
  let component: ExpenseDashboardSummaryComponent;
  let fixture: ComponentFixture<ExpenseDashboardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseDashboardSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseDashboardSummaryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
