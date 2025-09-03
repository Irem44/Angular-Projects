import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  value: number = 0;
  randomSayi: number = Math.floor(Math.random() * 10) + 1;
  tahminDurumu: boolean = false;
  tahminYapildi: boolean = false;

  arttir() {
    if (this.value < 10) {
      this.value++;
    }
  }
  azalt() {
    if (this.value > 0) {
      this.value--;
    }
  }
  tahmin() {
    this.tahminYapildi = true;
    if (this.value === this.randomSayi) {
      this.tahminDurumu = true;
      this.tahminYapildi = false;
    } else {
      this.tahminDurumu = false;
    }
  }
  reset() {
    this.randomSayi = Math.floor(Math.random() * 10) + 1;
    this.value = 0;
    this.tahminDurumu = false;
    this.tahminYapildi = false;
  }
}
