import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: HomeComponent },
  { path: 'yazilar', component: ArticlesComponent },
  { path: 'detay/:id', component: DetailsComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
