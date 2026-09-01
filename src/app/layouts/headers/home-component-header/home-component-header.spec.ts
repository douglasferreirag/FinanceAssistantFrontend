import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecomponentheader } from './home-component-header';

describe('Homecomponentheader', () => {
  let component: Homecomponentheader;
  let fixture: ComponentFixture<Homecomponentheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecomponentheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Homecomponentheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
