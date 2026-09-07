import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseGraphicsBody } from './expense-graphics-body';

describe('ExpenseGraphicsBody', () => {
  let component: ExpenseGraphicsBody;
  let fixture: ComponentFixture<ExpenseGraphicsBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseGraphicsBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseGraphicsBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
