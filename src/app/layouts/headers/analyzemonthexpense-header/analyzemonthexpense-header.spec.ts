import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzemonthexpenseHeader } from './analyzemonthexpense-header';

describe('AnalyzemonthexpenseHeader', () => {
  let component: AnalyzemonthexpenseHeader;
  let fixture: ComponentFixture<AnalyzemonthexpenseHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzemonthexpenseHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzemonthexpenseHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
