import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeExpenseHistorybodyComponent } from './analyzeexpensehistorybody.component';

describe('AnalyzeExpenseHistorybodyComponent', () => {
  let component: AnalyzeExpenseHistorybodyComponent;
  let fixture: ComponentFixture<AnalyzeExpenseHistorybodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeExpenseHistorybodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzeExpenseHistorybodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
