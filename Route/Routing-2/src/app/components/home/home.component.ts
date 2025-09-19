import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `Home`,
})
export class HomeComponent {
  page: any;
  constructor(private activatedRoute: ActivatedRoute) {
    //snapshot ile aldık
    this.page = this.activatedRoute.snapshot.queryParamMap.get('page');
    console.log(this.page + '-nolu sayfa');

    //şimdi size query string'ini observable ile alalım
    this.activatedRoute.queryParamMap.subscribe({
      next: (params) => console.log(params.get('size'), '-size'),
    });
  }
}
