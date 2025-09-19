import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  //favorilerere ekle
  addFavorite(id: number, name: string, price: number, imgUrl: string) {
    this.favorites.push({ id, name, price, imgUrl });
  }

  //get favoriler
  get favoritesGet() {
    return this.favorites;
  }

  private favorites: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }[] = [];
}
