import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  template: `Products`,
})
export class ProductsComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    //snapshot ile name'i yakalayalım
    const name: any = activatedRoute.snapshot.paramMap.has('name');
    if (name) {
      console.log("Name url'de bulunuyor", name);
    } else {
      console.log("name url'de bulunmamaktadır");
    }

    activatedRoute.paramMap.subscribe({
      next: (params) => {
        if (params.has('id')) {
          console.log("İd url'de bulunmaktadır", params.get('id'));
        } else {
          console.log("id  url'de bulunmamaktadır");
        }
      },
    });
  }
}
