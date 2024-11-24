import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTask3Component } from './forms-task3.component';

describe('FormsTask3Component', () => {
  let component: FormsTask3Component;
  let fixture: ComponentFixture<FormsTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsTask3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
