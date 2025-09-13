import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="customers" routerLinkActive="active">Customers</a>

    <a routerLink="home" routerLinkActive="active">Home</a>

    <a routerLink="products" routerLinkActive="active">Products</a>
    <!-- <a routerLink="a/b/c">A/B/C</a> -->
    <a [routerLink]="['a', 'b', 'c']" routerLinkActive="active">A/B/C</a>
    <br />
    <hr />
    <!-- Yeni rotaya uygun component'in yükleneceği alan için -->
    <router-outlet></router-outlet>
  `,
  standalone: false,
  styles: [
    `
      a {
        margin-right: 10px;
      }

      .active {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Routing';
}
