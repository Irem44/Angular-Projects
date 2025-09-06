import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-example [value]="data">Content</app-example>
    <ng-content></ng-content>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data: string = 'ngOnChanges';
}
