import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxModalComponent } from './toolbox-modal.component';

describe('ToolboxModalComponent', () => {
  let component: ToolboxModalComponent;
  let fixture: ComponentFixture<ToolboxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
