import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListHeader } from './goal-list-header';

describe('GoalListHeader', () => {
  let component: GoalListHeader;
  let fixture: ComponentFixture<GoalListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalListHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
