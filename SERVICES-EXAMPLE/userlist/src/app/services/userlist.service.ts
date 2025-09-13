import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  addUser(name: string, surname: string) {
    this.persons.push({ name, surname });
  }
  get users(): { name: string; surname: string }[] {
    return this.persons;
  }

  private persons: { name: string; surname: string }[] = [];
}
