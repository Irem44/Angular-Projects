import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { ReadPersonComponent } from './components/read-person/read-person.component';
import { UserListService } from './services/userlist.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CreatePersonComponent, ReadPersonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(withEventReplay()), UserListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
