import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routing.routs';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    HomeComponent,
    ErrorpageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
