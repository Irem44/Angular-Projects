import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  wordList: Array<string> = [];
  listeyeEkle(value: string) {
    this.wordList.push(value);
  }
}
