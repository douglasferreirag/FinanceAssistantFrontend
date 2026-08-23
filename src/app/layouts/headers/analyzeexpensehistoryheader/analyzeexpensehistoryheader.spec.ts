import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  AnalyzeExpenseHistoryHeaderComponent } from './analyzeexpensehistoryheader.component';

describe('AnalyzeExpenseHistoryHeaderComponent', () => {
  let component: AnalyzeExpenseHistoryHeaderComponent;
  let fixture: ComponentFixture<AnalyzeExpenseHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeExpenseHistoryHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzeExpenseHistoryHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
