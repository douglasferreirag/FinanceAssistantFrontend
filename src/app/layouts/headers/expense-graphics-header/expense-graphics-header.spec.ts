import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseGraphicsHeader } from './expense-graphics-header';

describe('ExpenseGraphicsHeader', () => {
  let component: ExpenseGraphicsHeader;
  let fixture: ComponentFixture<ExpenseGraphicsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseGraphicsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseGraphicsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
