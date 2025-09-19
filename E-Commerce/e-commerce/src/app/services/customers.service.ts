import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//buradaki customer listesini getirecek method yazılmalı
export class CustomerService {
  get customerListGet(): { name: string; surname: string }[] {
    return this.customerList;
  }

  //Müşteri eklemek için method
  addCustomer(name: string, surname: string) {
    this.customerList.push({
      name: name.toUpperCase(),
      surname: surname.toUpperCase(),
    });
  }
  private customerList: { name: string; surname: string }[] = [
    { name: 'BERNA', surname: 'ÇAĞLAR' },
    { name: 'HAKAN', surname: 'SİYAH' },
    { name: 'BURAK', surname: 'DENİZ' },
    { name: 'DENİZ', surname: 'BERRAK' },
    { name: 'EMİNE', surname: 'YILMAZ' },
    { name: 'AHMET', surname: 'DEMİR' },
    { name: 'ALEYNA', surname: 'BERRAK' },
  ];
}
