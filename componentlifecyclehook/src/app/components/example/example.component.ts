import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: false,
  template: `
    {{ value }}
    <input type="text" [(ngModel)]="value" style="height:50px" />
  `,
  styleUrl: './example.component.scss',
})
export class ExampleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() value: string;

  //C'in Input değişkeni selector referansı üzerinden değiştiği durumlarda tetiklenir
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1-ngOnChanges tetiklendi');
  }
  //Component ilk kez oluşturulduğunda tetiklenir
  ngOnInit(): void {
    console.log('2-ngOnInit tetiklendi');
  }
  //Componentin güncellenmesi durumunda sık sık tetiklenir
  ngDoCheck(): void {
    console.log('3-ngDoCheck tetiklendi');
  }
  //Component içeriği ilk kez oluşturulduğunda tetiklenir
  ngAfterContentInit(): void {
    console.log('4-ngAfterContentInit tetiklendi');
  }
  //Component'in içeriği güncellendiğinde tetiklenir
  ngAfterContentChecked(): void {
    console.log('5-ngAfterContentChecked tetiklendi');
  }
  //Component'in view'i ilk kez oluşturulduğunda tetiklenir
  ngAfterViewInit(): void {
    console.log('6-ngAfterViewInit tetiklendi');
  }
  //Component'in view'i güncellediğinde tetiklenir
  ngAfterViewChecked(): void {
    console.log('7-ngAfterViewChecked tetiklendi');
  }
  //Component'in kaldırılması/imha edilmesi tetiklenir
  // ngOnDestroy(): void {
  //   console.log('8-ngOnDestory tetiklendi');
  // }
}
