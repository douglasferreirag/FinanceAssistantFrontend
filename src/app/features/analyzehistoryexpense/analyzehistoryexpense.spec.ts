import { AnalyzeHistoryExpenseComponent } from './analyzehistoryexpense.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('AnalyzeHistoryExpense', () => {
  let component: AnalyzeHistoryExpenseComponent;
  let fixture: ComponentFixture<AnalyzeHistoryExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeHistoryExpenseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzeHistoryExpenseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
