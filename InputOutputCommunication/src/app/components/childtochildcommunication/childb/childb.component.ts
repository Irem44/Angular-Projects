import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb',
  standalone: false,
  template: `
    <div style="background-color: bisque;">
      <p style="color: green;">Child To Child Listesi</p>
      <p *ngFor="let name of personNameList">{{ name }}</p>
    </div>
  `,
})
export class ChildbComponent {
  @Input() personNameList: any[];
}
