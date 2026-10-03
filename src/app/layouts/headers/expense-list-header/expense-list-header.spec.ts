import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListHeader } from './expense-list-header';

describe('ExpenseListHeader', () => {
  let component: ExpenseListHeader;
  let fixture: ComponentFixture<ExpenseListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseListHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
