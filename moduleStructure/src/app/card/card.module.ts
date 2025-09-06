import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';

@NgModule({
  declarations: [CardcomponentComponent],
  imports: [CommonModule],
  exports: [CardcomponentComponent],
})
export class CardModule {}
