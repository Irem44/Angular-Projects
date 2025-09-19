import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //ürünleri getiren bir fonksiyon yazmalıyız
  get getProduct(): {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }[] {
    return this.productList;
  }

  //Bu listede ürünlerimiz tutulacak
  private productList: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }[] = [
    {
      id: 1,
      name: 'Marvel Karakterli Convers',
      price: 1500,
      imgUrl:
        'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg',
    },
    {
      id: 2,
      name: 'Casuel  Pembe',
      price: 1200,
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/04/03/10/38/sneakers-310941_1280.png',
    },
    {
      id: 3,
      name: 'Casuel  Mor',
      price: 1200,
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/04/02/10/59/shoes-305138_1280.png',
    },
    {
      id: 4,
      name: 'Casuel Gri',
      price: 1000,
      imgUrl:
        'https://cdn.pixabay.com/photo/2012/04/11/18/28/shoes-29282_1280.png',
    },
  ];
}
