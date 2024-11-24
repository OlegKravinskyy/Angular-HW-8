import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTask4Component } from './forms-task4.component';

describe('FormsTask4Component', () => {
  let component: FormsTask4Component;
  let fixture: ComponentFixture<FormsTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsTask4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
