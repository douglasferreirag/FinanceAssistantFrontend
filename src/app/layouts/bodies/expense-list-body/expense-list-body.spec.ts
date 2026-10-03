import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListBody } from './expense-list-body';

describe('ExpenseListBody', () => {
  let component: ExpenseListBody;
  let fixture: ComponentFixture<ExpenseListBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseListBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseListBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
