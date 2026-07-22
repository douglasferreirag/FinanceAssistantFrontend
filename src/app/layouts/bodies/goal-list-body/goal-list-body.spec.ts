import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListBody } from './goal-list-body';

describe('GoalListBody', () => {
  let component: GoalListBody;
  let fixture: ComponentFixture<GoalListBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalListBody],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalListBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
