import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  template: `
    <div class="container">
      <div style="margin-right: 20px;">{{ value }}</div>
      <button (click)="arttir()" style="margin-right: 20px;" class="buttons">
        Arttır
      </button>
      <button (click)="azalt()" class="buttons" style="margin-right: 20px;">
        Azalt
      </button>
      <button (click)="reset()" class="buttons">Reset</button>
    </div>
  `,
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  value: number = 0;

  arttir() {
    this.value++;
  }
  azalt() {
    if (this.value > 0) {
      this.value--;
    }
  }
  reset() {
    this.value = 0;
  }
}
