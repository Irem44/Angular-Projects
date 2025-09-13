import { Component } from '@angular/core';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-createtasks',
  standalone: false,
  template: `
    <input type="text" placeholder="Task Enter" #txttask id="task" />
    <button type="button" (click)="taskAdd(txttask.value)">Add Task</button>
  `,
  styles: [
    `
      input {
        margin: 10px;
        padding: 10px;
        border: 2px solid orange;
        border-radius: 10px;
        font-size: 15px;
      }
      input:focus {
        outline: none;
      }

      button {
        margin: 10px;
        padding: 10px;
        border: 2px solid orange;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
        background-color: orange;
      }
    `,
  ],
})
export class CreatetasksComponent {
  //Servisi kullanmak için burada çağırma
  constructor(public taskList: TasklistService) {}

  //Artık servisi class'ını kullanabiliriz
  taskAdd(task: string) {
    this.taskList.addTask(task);
  }
}
