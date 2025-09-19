import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: false,
  template: ` Customer `,
})
export class CustomersComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    //snapshot ile url verilerine ulaştık
    const hasId: any = activatedRoute.snapshot.paramMap.has('id');
    const id: any = activatedRoute.snapshot.paramMap.get('id');
    const prmsId: any = activatedRoute.snapshot.params['id'];
    console.log(hasId);
    console.log(id);
    console.log(prmsId);
  }
}
