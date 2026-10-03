import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAnalyzeHistoryBodyComponent } from './expense-analyzehistory-body.component';


describe('ExpenseAnalyzeHistoryBodyComponent', () => {
  let component: ExpenseAnalyzeHistoryBodyComponent;
  let fixture: ComponentFixture<ExpenseAnalyzeHistoryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAnalyzeHistoryBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseAnalyzeHistoryBodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
