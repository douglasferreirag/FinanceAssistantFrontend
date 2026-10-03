import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentBody } from './home-component-body';

describe('HomeComponentBody', () => {
  let component: HomeComponentBody;
  let fixture: ComponentFixture<HomeComponentBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentBody],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponentBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
