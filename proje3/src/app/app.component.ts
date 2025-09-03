import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      style="display: flex;justify-content: center;align-items: center;flex-direction: column;"
    >
      <h1 style="color: #555879;">Sayı Tahmin Oyunu</h1>
      <app-container></app-container>
    </div>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proje3';
}
