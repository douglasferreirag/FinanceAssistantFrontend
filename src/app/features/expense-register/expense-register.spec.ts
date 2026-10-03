import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ExpenseRegisterComponent } from './expense-register';

describe('ExpenseRegisterComponent', () => {
  let component: ExpenseRegisterComponent;
  let fixture: ComponentFixture<ExpenseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseRegisterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
