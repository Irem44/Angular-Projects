import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h1>Sayaç</h1>
      <app-container></app-container>
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proje2';
}
