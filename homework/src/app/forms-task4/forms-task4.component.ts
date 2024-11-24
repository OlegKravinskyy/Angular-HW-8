import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-task4',
  templateUrl: './forms-task4.component.html',
  styleUrls: ['./forms-task4.component.css'],
})
export class FormsTask4Component implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      acceptTerms: [false, Validators.requiredTrue],
      hobbies: this.fb.array([]),
    });
  }

  get hobbies(): FormArray {
    return this.loginForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }
  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.loginForm.reset();
    }
  }

  ngOnInit(): void {}
}
