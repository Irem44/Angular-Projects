import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  template: `
    <p>Ben child componentiyim</p>
    <div style="background-color: burlywood;">
      <h3 style="color: green;">Parent-Child Communication</h3>
      <p>{{ message }}</p>
      <p>Name:{{ name | uppercase }}</p>
      <p>Age:{{ age }}</p>
    </div>
  `,
})
export class Child1Component {
  @Input() message: string;
  @Input() name: string;
  @Input() age: number;
}
