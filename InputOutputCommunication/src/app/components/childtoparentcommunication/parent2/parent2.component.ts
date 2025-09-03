import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  standalone: false,
  template: `
    <div style="background-color: greenyellow;">
      <h2 style="color: brown;">Child To Parent</h2>
      <app-child2
        (dataEvent)="childEvent($event)"
        (dataEvent2)="childEvent2($event)"
        (personList)="nameList($event)"
      ></app-child2>
    </div>
  `,
})
export class Parent2Component {
  childEvent(obj: any) {
    console.log(obj);
  }
  childEvent2(data: number) {
    console.log('İletilen sayı:', data);
  }
  nameList(list: Array<any>) {
    for (let name of list) {
      console.log(name);
    }
  }
}
