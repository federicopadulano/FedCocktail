import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { PageErrorComponent } from './features/page-error/page-error.component';
import { SingleCocktailComponent } from './features/single-cocktail/single-cocktail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: ':id', component: SingleCocktailComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
