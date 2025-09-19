import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { FavoritesService } from '../../services/favorites.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SepetService } from '../../services/sepet.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  id: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public favoriteService: FavoritesService,
    public snackBar: MatSnackBar,
    public sepetService: SepetService
  ) {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
      },
    });
  }
  addFavorite(id: number, imgUrl: string, name: string, price: number) {
    if (this.id == id) {
      for (let fvr of this.favoriteService.favoritesGet) {
        if (id === fvr.id) {
          this.snackBar.open('Zaten ürün favorilerinizde var', 'Kapat', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          return;
        }
      }
      this.favoriteService.addFavorite(id, name, price, imgUrl);
      this.snackBar.open('Favorilere eklendi', 'Kapat!', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }

  add_Basket(id: number, name: string, price: number, imgUrl: string) {
    for (let product of this.sepetService.sepetListGet) {
      if (product.id === id) {
        this.snackBar.open('Ürün zaten sepetinizde', 'Kapat', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        return;
      }
    }
    this.sepetService.addBasket(id, name, price, imgUrl);
    this.snackBar.open('Ürün sepetinize eklendi', 'Kapat', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
