import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './components/parenttochildcommunication/child1/child1.component';
import { Child2Component } from './components/childtoparentcommunication/child2/child2.component';
import { Parent1Component } from './components/parenttochildcommunication/parent1/parent1.component';
import { Parent2Component } from './components/childtoparentcommunication/parent2/parent2.component';
import { ChildaComponent } from './components/childtochildcommunication/childa/childa.component';
import { ChildbComponent } from './components/childtochildcommunication/childb/childb.component';
import { Parent3Component } from './components/childtochildcommunication/parent3/parent3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Parent1Component,
    Parent2Component,
    ChildaComponent,
    ChildbComponent,
    Parent3Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
