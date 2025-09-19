import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { SepetService } from '../../services/sepet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favorites',
  standalone: false,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  constructor(
    public favoritesService: FavoritesService,
    public sebetService: SepetService,
    public snackBar: MatSnackBar
  ) {}

  addBaskettoFavorites(id, name, price, imgUrl) {
    for (let urun of this.sebetService.sepetListGet) {
      if (urun.id === id) {
        this.snackBar.open('Ürün zaten sepete ekli', 'Kapat', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        return;
      }
    }
    this.sebetService.addBasket(id, name, price, imgUrl);
    this.snackBar.open('Ürün sepete eklendi', 'Kapat', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
