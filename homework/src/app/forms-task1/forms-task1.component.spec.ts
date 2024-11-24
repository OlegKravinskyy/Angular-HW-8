import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTask1Component } from './forms-task1.component';

describe('FormsTask1Component', () => {
  let component: FormsTask1Component;
  let fixture: ComponentFixture<FormsTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsTask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
