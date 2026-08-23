import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalRegisterBody } from './goal-register-body';

describe('GoalRegisterBody', () => {
  let component: GoalRegisterBody;
  let fixture: ComponentFixture<GoalRegisterBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalRegisterBody],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalRegisterBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
