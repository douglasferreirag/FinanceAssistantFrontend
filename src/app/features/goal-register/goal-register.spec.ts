import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalRegisterComponent } from './goal-register';

describe('GoalRegisterComponent', () => {
  let component: GoalRegisterComponent;
  let fixture: ComponentFixture<GoalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalRegisterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
