import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SepetComponent } from './components/sepet/sepet.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    CustomersComponent,
    ProductsComponent,
    ErrorpageComponent,
    ProductDetailsComponent,
    FavoritesComponent,
    SepetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatSnackBarModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
