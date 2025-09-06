import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';

@NgModule({
  declarations: [UsercomponentComponent],
  imports: [CommonModule],
  exports: [UsercomponentComponent],
})
export class UserModule {}
