import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-parent1></app-parent1>
    <br />
    <app-parent2></app-parent2>
    <br />
    <app-parent3></app-parent3>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'InputOutputCommunication';
}
