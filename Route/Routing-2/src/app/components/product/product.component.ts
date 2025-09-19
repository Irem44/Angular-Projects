import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  template: `
    Product

    <router-outlet></router-outlet>
  `,
})
export class ProductComponent {}
