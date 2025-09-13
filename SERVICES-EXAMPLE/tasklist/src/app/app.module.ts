import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistService } from './services/tasklist.service';
import { CreatetasksComponent } from './components/createtasks/createtasks.component';
import { ReadtasksComponent } from './components/readtasks/readtasks.component';

@NgModule({
  declarations: [AppComponent, CreatetasksComponent, ReadtasksComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay()), TasklistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
