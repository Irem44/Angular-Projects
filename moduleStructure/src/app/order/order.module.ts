import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';

@NgModule({
  declarations: [OrdercomponentComponent],
  imports: [CommonModule],
  exports: [OrdercomponentComponent],
})
export class OrderModule {}
