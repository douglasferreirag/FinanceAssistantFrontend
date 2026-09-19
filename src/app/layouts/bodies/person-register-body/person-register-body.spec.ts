import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRegisterBody } from './person-register-body';

describe('PersonRegisterBody', () => {
  let component: PersonRegisterBody;
  let fixture: ComponentFixture<PersonRegisterBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonRegisterBody],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonRegisterBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
