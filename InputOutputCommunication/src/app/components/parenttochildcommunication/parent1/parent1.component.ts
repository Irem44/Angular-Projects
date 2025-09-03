import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: false,
  template: `
    <p>Ben parent componentiyim</p>
    <app-child1 [message]="data" [name]="dataName" [age]="dataAge"></app-child1>
  `,
})
export class Parent1Component {
  data: string = 'Hello';
  dataName: string = 'Arda';
  dataAge: number = 25;
}
