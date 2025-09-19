import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/home']" [queryParams]="{ page: 1, size: 1 }">Home 1</a>
    <a
      [routerLink]="['/home']"
      [queryParams]="{ page: 2, size: 1 }"
      queryParamsHandling="preserve"
      >Home 2</a
    >

    ||<a routerLink="products" [queryParams]="{ page: 2, size: 10 }"
      >Products</a
    >
    <br />
    <hr />
    <router-outlet></router-outlet>
  `,
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Routing-2';
}
