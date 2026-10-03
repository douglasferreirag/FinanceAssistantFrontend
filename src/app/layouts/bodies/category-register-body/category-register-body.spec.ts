import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRegisterBodyComponent } from './category-register-body';

describe('CategoryRegisterBody', () => {
  let component: CategoryRegisterBodyComponent;
  let fixture: ComponentFixture<CategoryRegisterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryRegisterBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryRegisterBodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
