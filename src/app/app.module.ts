import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { AboutComponent } from './features/about/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { FormComponent } from './features/home/form/form.component';
import { CocktailListComponent } from './features/home/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './features/home/cocktail-list/cocktail/cocktail.component';
import { SingleCocktailComponent } from './features/single-cocktail/single-cocktail.component';
import { PageErrorComponent } from './features/page-error/page-error.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent, HomeComponent, FormComponent, CocktailListComponent, CocktailComponent, SingleCocktailComponent, PageErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
