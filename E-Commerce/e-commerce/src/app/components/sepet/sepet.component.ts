import { Component } from '@angular/core';
import { SepetService } from '../../services/sepet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sepet',
  standalone: false,
  templateUrl: './sepet.component.html',
  styleUrl: './sepet.component.scss',
})
export class SepetComponent {
  toplamTutar: number = 0;
  constructor(public sepetService: SepetService) {}

  sepetTutari() {
    this.toplamTutar = 0;
    for (let product of this.sepetService.sepetListGet) {
      this.toplamTutar += product.price;
    }
    return this.toplamTutar;
  }
}
