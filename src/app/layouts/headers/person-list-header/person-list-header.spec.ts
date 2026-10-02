import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListHeader } from './person-list-header';

describe('PersonListHeader', () => {
  let component: PersonListHeader;
  let fixture: ComponentFixture<PersonListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
