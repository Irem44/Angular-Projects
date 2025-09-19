import { Component } from '@angular/core';
import { CustomerService } from '../../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  constructor(
    public customerService: CustomerService,
    public snakBar: MatSnackBar
  ) {}

  addCustomer(
    name: string,
    surname: string,
    txtname: HTMLInputElement,
    txtsurname: HTMLInputElement
  ) {
    if (name != '' && surname != '') {
      for (let customer of this.customerService.customerListGet) {
        if (
          customer.name.toUpperCase().trim() === name.toUpperCase().trim() &&
          customer.surname.toUpperCase().trim() === surname.toUpperCase().trim()
        ) {
          this.snakBar.open('Listede ad ve soyad var', 'Kapat', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          txtname.value = '';
          txtsurname.value = '';
          return;
        }
      }
      this.customerService.addCustomer(name, surname);
      txtname.value = '';
      txtsurname.value = '';
    } else {
      this.snakBar.open('Bir isim ve soyisim giriniz', 'Kapat', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
  deleteByIndex(index: number) {
    this.customerService.customerListGet.splice(index, 1);
  }
}
