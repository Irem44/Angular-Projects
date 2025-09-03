import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  template: ` <p>Child Componet</p>`,
})
export class Child2Component implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({ message: "Merhaba Parent'a veri gönderiyorum" });
    this.dataEvent2.emit(55);
    this.personList.emit(['Arda', 'Emir', 'Zeynep', 'Sude']);
  }
  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
  @Output() dataEvent2: EventEmitter<number> = new EventEmitter();
  @Output() personList: EventEmitter<Array<any>> = new EventEmitter();
}
