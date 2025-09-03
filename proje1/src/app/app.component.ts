import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //

  template: `
    <div class="container">
      <h1>Tanıtım Kartı</h1>
      <app-user
        [name]="name"
        [surname]="surname"
        [age]="age"
        [job]="job"
      ></app-user>
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name: string = 'İrem Sude';
  surname: string = 'Demir';
  age: number = 23;
  job: string = 'Software Engineer';
}
