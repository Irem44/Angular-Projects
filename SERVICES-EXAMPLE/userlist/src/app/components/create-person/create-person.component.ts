import { Component } from '@angular/core';
import { UserListService } from '../../services/userlist.service';

@Component({
  selector: 'app-create-person',
  standalone: false,
  template: `
    <!-- Template reference variable -->
    <input type="text" placeholder="Name" #txtname />
    <input type="text" placeholder="Surname" #txtsurname />
    <button
      type="button"
      (click)="createPerson(txtname.value, txtsurname.value)"
    >
      Create
    </button>
  `,
  styles: [
    `
      input {
        margin: 10px;
        padding: 10px;
        border: 2px solid orange;
        border-radius: 10px;
        font-size: 15px;
      }
      input:focus {
        outline: none;
      }

      button {
        margin: 10px;
        padding: 10px;
        border: 2px solid orange;
        border-radius: 10px;
        font-size: 15px;
        cursor: pointer;
        background-color: orange;
      }
    `,
  ],
})
export class CreatePersonComponent {
  constructor(private userService: UserListService) {}
  createPerson(name: string, surname: string) {
    this.userService.addUser(name, surname);
  }
}
