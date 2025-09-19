import { Component } from '@angular/core';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(public productService: ProductService) {}
}
