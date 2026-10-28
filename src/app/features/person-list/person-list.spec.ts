import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponent} from './person-list.js';
import { describe, beforeEach, it, expect } from 'vitest';

describe('PersonList', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
