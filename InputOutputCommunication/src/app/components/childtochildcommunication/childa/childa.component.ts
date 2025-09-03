import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-childa',
  standalone: false,
  template: ``,
})
export class ChildaComponent implements OnInit {
  personList: any[] = ['Ali', 'Ayşe', 'Fatma', 'Ahmet'];

  ngOnInit(): void {
    this.data.emit([this.personList]);
  }
  @Output() data: EventEmitter<Array<any>> = new EventEmitter();
}
