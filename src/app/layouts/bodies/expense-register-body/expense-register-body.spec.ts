import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ExpenseRegisterBodyComponent } from './expense-register-body';

describe('ExpenseRegisterBody', () => {
  let component: ExpenseRegisterBodyComponent;
  let fixture: ComponentFixture<ExpenseRegisterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseRegisterBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseRegisterBodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
