import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `Home`,
})
export class HomeComponent {
  //observable ile url den veri alma
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe({
      next: (param) => console.log(param.get('id')),
    });
  }
}
