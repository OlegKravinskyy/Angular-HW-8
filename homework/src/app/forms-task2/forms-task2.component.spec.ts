import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTask2Component } from './forms-task2.component';

describe('FormsTask2Component', () => {
  let component: FormsTask2Component;
  let fixture: ComponentFixture<FormsTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsTask2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
