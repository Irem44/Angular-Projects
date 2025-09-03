import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  standalone: false,

  template: `
    <div class="user-card">
      <h3>Name:{{ name }}</h3>
      <h3>Surname:{{ surname }}</h3>
      <h3>Age:{{ age }}</h3>
      <h3>Job:{{ job }}</h3>
      <button mat-raised-button (click)="openSnackBar()">
        Ayrıntılı Bilgi
      </button>
    </div>
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(private snackbar: MatSnackBar) {}
  @Input() name: string;
  @Input() surname: string;
  @Input() age: number;
  @Input() job: string;

  openSnackBar() {
    this.snackbar.open('Bu bir tanıtım kartıdır', 'Kapat', {
      duration: 3000,
    });
  }
}
