import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {
  //Görev eklemek için bir method yazmam lazım
  addTask(task: string) {
    this.list.push(task);
  }

  get listTask(): string[] {
    return this.list;
  }

  //Görev listesi için bir dizi oluşturduk
  public list: string[] = [];
}
