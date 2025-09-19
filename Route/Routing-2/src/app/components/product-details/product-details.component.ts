import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  template: `{{ this.message }}`,
})
export class ProductDetailsComponent {
  id: any;
  message: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        (this.id = params.get('id')),
          (this.message = `${this.id} nolu ürüne gittiniz.`);
      },
    });
  }
}
