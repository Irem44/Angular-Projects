import { Component } from '@angular/core';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-readtasks',
  standalone: false,

  template: `
    <ul>
      <li *ngFor="let task of taskList.listTask">{{ task }}</li>
    </ul>
  `,
})
export class ReadtasksComponent {
  //İlk önce servisi almamamız lazım
  constructor(public taskList: TasklistService) {}
}
