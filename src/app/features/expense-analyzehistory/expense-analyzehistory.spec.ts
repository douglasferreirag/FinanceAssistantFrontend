import { ExpenseAnalyzeHistoryComponent } from './expense-analyzehistory.component';
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
