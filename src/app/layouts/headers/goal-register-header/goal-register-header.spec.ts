import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalRegisterHeader } from './goal-register-header';

describe('GoalRegisterHeader', () => {
  let component: GoalRegisterHeader;
  let fixture: ComponentFixture<GoalRegisterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalRegisterHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalRegisterHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
