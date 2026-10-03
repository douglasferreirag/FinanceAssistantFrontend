import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRegisterHeader } from './category-register-header';

describe('CategoryRegisterHeader', () => {
  let component: CategoryRegisterHeader;
  let fixture: ComponentFixture<CategoryRegisterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRegisterHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryRegisterHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
