import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  value: string;

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();

  ekle() {
    this.dataEvent.emit(this.value);
    this.value = '';
  }
}
