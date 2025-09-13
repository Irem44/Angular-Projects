import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-createtasks></app-createtasks>
    <app-readtasks></app-readtasks>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tasklist';
}
