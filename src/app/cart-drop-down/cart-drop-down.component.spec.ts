import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDropDownComponent } from './cart-drop-down.component';

describe('CartDropDownComponent', () => {
  let component: CartDropDownComponent;
  let fixture: ComponentFixture<CartDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
