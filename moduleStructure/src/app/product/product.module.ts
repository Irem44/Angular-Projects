import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';

@NgModule({
  declarations: [ProductcomponentComponent],
  imports: [CommonModule],
  exports: [ProductcomponentComponent],
})
export class ProductModule {}
