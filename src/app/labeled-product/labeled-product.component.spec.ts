import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledProductComponent } from './labeled-product.component';

describe('LabeledProductComponent', () => {
  let component: LabeledProductComponent;
  let fixture: ComponentFixture<LabeledProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
