import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysisexpense } from './analysimonthexpense';

describe('Analysisexpense', () => {
  let component: Analysisexpense;
  let fixture: ComponentFixture<Analysisexpense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Analysisexpense],
    }).compileComponents();

    fixture = TestBed.createComponent(Analysisexpense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
