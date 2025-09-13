import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-create-person></app-create-person>
    <app-read-person></app-read-person>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'userlist';
}
