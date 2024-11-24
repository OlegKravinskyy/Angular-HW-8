import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-task3',
  templateUrl: './forms-task3.component.html',
  styleUrls: ['./forms-task3.component.css'],
})
export class FormsTask3Component implements OnInit {
  registrationForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userLogin: new FormControl('Login'),
      userPass: new FormControl(),
      name: new FormGroup({
        firstName: new FormControl(),
        secondName: new FormControl(null),
      }),
    });
  }

  onSubmit(form: object) {
    console.log(form);
  }
}
