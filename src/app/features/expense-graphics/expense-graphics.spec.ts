import { ExpenseGraphicsComponent } from './expense-graphics';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ExpenseGraphicsComponent', () => {
  let component: ExpenseGraphicsComponent;
  let fixture: ComponentFixture<ExpenseGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseGraphicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseGraphicsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
