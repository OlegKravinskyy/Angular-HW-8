import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-task1',
  templateUrl: './forms-task1.component.html',
  styleUrl: './forms-task1.component.css',
})
export class FormsTask1Component {
  email: string = '';
  password: string = '';
  userData: object = {};

  onSubmit() {
    this.userData = {
      email: this.email,
      password: this.password,
    };
    console.log(this.userData);
  }
}
