import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  standalone: false,
  template: `
    <app-childa (data)="listele($event)"></app-childa>
    <app-childb [personNameList]="myNameList"></app-childb>
  `,
})
export class Parent3Component {
  myNameList: any[];
  listele(list: any[]) {
    this.myNameList = list;
  }
}
