import { Routes } from '@angular/router';
import { CustomersComponent } from '../components/customers/customers.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ErrorpageComponent } from '../components/errorpage/errorpage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:name/:id', component: ProductsComponent },
  { path: 'a/b/c', component: HomeComponent },
  { path: '**', component: ErrorpageComponent },
];
