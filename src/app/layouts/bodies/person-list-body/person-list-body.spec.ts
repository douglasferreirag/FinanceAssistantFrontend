import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListBody } from './person-list-body';

describe('PersonListBody', () => {
  let component: PersonListBody;
  let fixture: ComponentFixture<PersonListBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListBody],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
