import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzemonthexpenseBody } from './analyzemonthexpense-body';

describe('AnalyzemonthexpenseBody', () => {
  let component: AnalyzemonthexpenseBody;
  let fixture: ComponentFixture<AnalyzemonthexpenseBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzemonthexpenseBody],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzemonthexpenseBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
