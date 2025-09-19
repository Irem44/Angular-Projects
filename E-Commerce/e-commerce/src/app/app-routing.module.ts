import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SepetComponent } from './components/sepet/sepet.component';

const routes: Routes = [
  //path tanımlama
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: AnasayfaComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'sepet', component: SepetComponent },

  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
