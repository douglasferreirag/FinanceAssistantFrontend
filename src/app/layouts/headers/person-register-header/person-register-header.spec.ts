import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRegisterHeader } from './person-register-header';

describe('PersonRegisterHeader', () => {
  let component: PersonRegisterHeader;
  let fixture: ComponentFixture<PersonRegisterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonRegisterHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonRegisterHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
