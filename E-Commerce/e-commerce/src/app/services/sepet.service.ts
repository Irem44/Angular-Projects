import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SepetService {
  //Sepete ürün ekleme
  addBasket(id: number, name: string, price: number, imgUrl: string) {
    this.sepetList.push({ id, name, price, imgUrl });
  }

  get sepetListGet() {
    return this.sepetList;
  }

  private sepetList: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }[] = [];
}
