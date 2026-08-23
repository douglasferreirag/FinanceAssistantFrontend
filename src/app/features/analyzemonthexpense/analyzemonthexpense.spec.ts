import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analyzemonthexpense } from './analyzemonthexpense';

describe('Analyzemonthexpense', () => {
  let component: Analyzemonthexpense;
  let fixture: ComponentFixture<Analyzemonthexpense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analyzemonthexpense],
    }).compileComponents();

    fixture = TestBed.createComponent(Analyzemonthexpense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
