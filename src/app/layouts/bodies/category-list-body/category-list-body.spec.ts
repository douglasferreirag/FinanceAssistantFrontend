import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListBody } from './category-list-body';

describe('CategoryListBody', () => {
  let component: CategoryListBody;
  let fixture: ComponentFixture<CategoryListBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListBody],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
