import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurencySelectorComponent } from './curency-selector.component';

describe('CurencySelectorComponent', () => {
  let component: CurencySelectorComponent;
  let fixture: ComponentFixture<CurencySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurencySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
