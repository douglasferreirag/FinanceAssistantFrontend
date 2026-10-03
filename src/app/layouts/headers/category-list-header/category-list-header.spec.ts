import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListHeader } from './category-list-header';

describe('CategoryListHeader', () => {
  let component: CategoryListHeader;
  let fixture: ComponentFixture<CategoryListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
