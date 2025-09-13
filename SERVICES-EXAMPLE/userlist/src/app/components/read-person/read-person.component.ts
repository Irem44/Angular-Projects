import { Component } from '@angular/core';
import { UserListService } from '../../services/userlist.service';

@Component({
  selector: 'app-read-person',
  standalone: false,
  template: `
    <ul>
      <li *ngFor="let person of userServices.users">
        {{ person.name }} {{ person.surname }}
      </li>
    </ul>
  `,
})
export class ReadPersonComponent {
  constructor(public userServices: UserListService) {}
}
