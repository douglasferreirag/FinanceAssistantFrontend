import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRegister } from './category-register';

describe('CategoryRegister', () => {
  let component: CategoryRegister;
  let fixture: ComponentFixture<CategoryRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
